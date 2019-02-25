import React, {Component} from 'react';

import "./index.scss";

class Header extends Component {
    handleGoback = () => {
        window.history.back();
    };

    render() {
        const {showShare} = this.props;

        return (
            <div className="commodity-hd">
                <div
                    className="btn goback"
                    onClick={this.handleGoback}
                ><i /></div>
                <div
                    className="btn share"
                    onClick={showShare}
                ><i /></div>
            </div>
        );
    }
}

export default Header;