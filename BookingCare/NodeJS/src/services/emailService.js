require('dotenv').config();
import nodemailer from 'nodemailer'
let sendSimpleEmail = async (dataSend) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.EMAIL_APP,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });

        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: '"Booking Care 👻" <minhdeptrai.09.2004@gmail.com>', // sender address
          to: dataSend.receiversEmail, // list of receivers
          subject: "Thông tin đặt lịch khám bệnh", // Subject line
          html: getBodyHTMLEmail(dataSend), 
        });  
}

let getBodyHTMLEmail = (dataSend) => {
    let result  = ''
    if(dataSend.language === 'vi'){
        result =  
        `
        <h3>Xin chào ${dataSend.patientName}</h3>
        <p>Bạn nhận được mail này vì bạn đặt lịch khám bệnh online trên Booking Care</p>
        <p>Thông Tin đặt lịch khám bệnh: </p>
        <div><b>Thời gian: ${dataSend.time}</b></div>
        <div><b>Bác Sĩ: ${dataSend.doctorName}</b></div>

        <p>Nếu các thông tin trên là đúng mời bạn click vào đường link bên dưới để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh.
        </p>
        <div>
        <a href=${dataSend.redirectLink}>Click Here</a></div>

        <p>Lưu Ý!</p>
        <p>Nếu bạn không xác nhận mọi thủ tục đănng kí khám bệnh. Lịch khám của bạn xẽ tự động xóa trong vòng 24h tới</p>
        <div>ĐỘI NGŨ BOOKING CARE XIN CHÂN THÀNH CẢM ƠN QUÝ KHÁCH HÀNG.</div>
        `
    }
    if(dataSend.language === 'en'){
        result = 
        `
        <h3>Hello! ${dataSend.patientName}</h3>
        <p>You received this email because you made an online medical appointment on Booking Care</p>
        <p>Information for scheduling medical examination:</p>
        <div><b>Time: ${dataSend.time}</b></div>
        <div><b>Doctor: ${dataSend.doctorName}</b></div>

        <p>If the above information is correct, please click on the link below to confirm and complete the procedure for scheduling a medical examination.
        </p>
        <div>
        <a href=${dataSend.redirectLink}>Click Here</a></div>

        <p>Note!</p>
        <p>If you do not confirm all medical registration procedures. Your appointment will be automatically deleted within the next 24 hours</p>
        <div>BOOKING CARE TEAM WOULD THANK OUR CUSTOMERS.</div>
        `
    }
    return  result;
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail
}