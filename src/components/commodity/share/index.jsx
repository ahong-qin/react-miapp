import React, {Component} from 'react';

import "./css/index.scss";

class Share extends Component {
    constructor(props){
        super(props);
        this.state = {
            shareOnOff : this.props.shareOnOff
        };
    }

    componentDidMount() {
        this.toggleShare(this.state.shareOnOff);
    }

    componentWillReceiveProps(nextProps) {
        if( this.state.shareOnOff !== nextProps.shareOnOff ){
            this.setState({
                shareOnOff : nextProps.shareOnOff
            });
            this.toggleShare(nextProps.shareOnOff);
        }
    }

    render() {
        const {hideShare} = this.props;

        return (
            <div
                className="commodity-share"
                ref={share=>this._wrapper=share}
                style={{height: 0}}
            >
                <div className="share-main">
                    <p>分享</p>
                    <div className="partner">
                        <div className="wb">
                            <img src={require("./img/wb.png")} alt="微博" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
                <div
                    className="share-cancel"
                    onClick={hideShare}
                >取消</div>
            </div>
        );
    }

    toggleShare = (onOff) => {
        const scrollHeight = this._wrapper.scrollHeight;
        this._wrapper.style.height = onOff ? scrollHeight + "px" : 0;
    };
}

export default Share;