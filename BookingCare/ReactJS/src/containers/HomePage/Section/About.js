import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Truyền thông nói về BookingCare
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OASGscJQXp0?si=fqR1keVpX_bYeh_i"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Bookingcare là một nền tảng trực tuyến cung cấp dịch vụ đặt lịch
              hẹn y tế tiện lợi và nhanh chóng. Với Bookingcare, việc tìm kiếm
              và đặt lịch hẹn với bác sĩ, chuyên gia y tế trở nên dễ dàng hơn
              bao giờ hết. Bằng cách kết nối với một mạng lưới rộng lớn các cơ
              sở y tế và bác sĩ uy tín, Bookingcare giúp người dùng tiết kiệm
              thời gian và nỗ lực trong việc quản lý sức khỏe của mình. Với giao
              diện thân thiện và tính năng linh hoạt, Bookingcare mang lại trải
              nghiệm đặt lịch hẹn y tế trực tuyến đáng tin cậy và thuận tiện cho
              mọi người.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
