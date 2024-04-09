import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu, doctorMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES, USER_ROLE } from "../../utils";
import { FormattedMessage } from 'react-intl';
import _, { constant } from 'lodash';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: JSON.parse( localStorage.getItem('user') ),
            menuApp: [],
        }
    }

    handleChangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    componentDidMount() {
        this.setState ({userInfo: JSON.parse( localStorage.getItem('user'))}
            
        )
        console.log('userinfo:' ,this.state.userInfo)
        // console.log('check userinfo: ',this.state.menuApp)
        
        if (this.state.userInfo && !_.isEmpty(this.state.userInfo)) {
            let role = this.state.userInfo.roleId;
            if (role === USER_ROLE.ADMIN) {
                this.setState({
                    menuApp: adminMenu
                })
            }
            if (role === USER_ROLE.DOCTOR) {
                this.setState({
                    menuApp: doctorMenu
                })
            }

        }

       
    }

    render() {
        const { processLogout, language } = this.props;
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={this.state.menuApp} />
                </div>

                <div className="languages">
                    <span className='welcome'>
                        <FormattedMessage id="homeheader.welcome" />
                        {this.state.userInfo && this.state.userInfo.firstName ? this.state.userInfo.firstName : ''} !
                    </span>
                    <span
                        className={language === LANGUAGES.VI ? "language-vi active" : "language-vi"}
                        onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}

                    >VN
                    </span>
                    <span
                        className={language === LANGUAGES.EN ? "language-en active" : "language-en"}
                        onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}
                    >EN
                    </span>

                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title='Log out'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    console.log('check state: ',state.user)
   
    
    
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () =>{
            localStorage.setItem('user',JSON.stringify({}))
            return dispatch(actions.processLogout())
        },
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
