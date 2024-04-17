import patientService from '../services/patientService';

let postBookAppoiment = async (req, res) => { 
    try {
        let infor = await patientService.postBookAppoiment(req.body);
        return res.status(200).json(
            infor 
        )
    }catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let postVerifyBookAppoiment = async (req, res) => { 
    try {
        let infor = await patientService.postVerifyBookAppoiment(req.body);
        return res.status(200).json(
            infor 
        )
    }catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

module.exports = {
    postBookAppoiment: postBookAppoiment,
    postVerifyBookAppoiment: postVerifyBookAppoiment
}