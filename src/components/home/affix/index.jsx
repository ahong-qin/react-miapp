import React, {Component} from 'react';

import "./css/index.scss";

class Affix extends Component {
    state = {
        show : false
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleToggleShow);
    }

    handleToggleShow = () => {
        const rem = getComputedStyle(document.documentElement).fontSize;
        const showScrollTop = rem.match(/\d*/)[0] * 13.54;

        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        this.setState({
            show : scrollTop > showScrollTop
        });
    };

    handleBackTop = () => {
        (function changeScrollTop(){
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            if( scrollTop > 0 ){
                const speed = scrollTop / 7;
                document.documentElement.scrollTop = document.body.scrollTop = scrollTop - speed;
                window.requestAnimationFrame(changeScrollTop);
            }else{
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            }
        })();
    };

    render() {
        return (
            this.state.show && (
                <div className="home-affix">
                    <div className="downloadApp">
                        <a href="http://s1.mi.com/m/appdownload/?client_id=180100031058&masid=17409.0451&enter=1">
                            <img src={require("../../../static/img/downloadApp.gif")} alt="下载APP" width="100%" />
                        </a>
                    </div>
                    <div className="backTop" onClick={this.handleBackTop}>
                        <img src={require("../../../static/icon/backTop.png")} alt="回到顶部" width="100%" />
                    </div>
                </div>
            )
        );
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleToggleShow);
    }
}

export default Affix;