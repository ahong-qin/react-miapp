import React, {Component} from 'react';

import "./css/index.scss";

class Header extends Component {
    render() {
        return (
            <header className="user-hd">
                <div className="content">
                    <div className="avatar">
                        <img src={require("./img/userImg.png")} alt="用户头像" />
                    </div>
                    <div className="login">
                        <span>登录/注册</span>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;