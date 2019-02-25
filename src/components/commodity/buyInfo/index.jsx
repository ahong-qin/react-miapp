import React, {Component} from 'react';
import {connect} from "react-redux";

import {setUserLocatioin} from "../../../actions/user";

import "./css/index.scss";

@connect(
    state => ( {user : state.user} ),
    {setUserLocatioin}
)
class BuyInfo extends Component {
    componentDidMount() {
        const {setUserLocatioin} = this.props;

        const {BMap, BMAP_STATUS_SUCCESS} = window;

        const geolocation = new BMap.Geolocation();   // 用于定位的对象实例
        const geoc = new BMap.Geocoder();             // 地址解析器

        geolocation.getCurrentPosition(function(result){
            if( this.getStatus() === BMAP_STATUS_SUCCESS ){
                const pt = result.point;
                geoc.getLocation(pt, function(res){
                    const {province, city, district, street, streetNumber} = res.addressComponents;
                    const address = `${province} ${city} ${district} ${street} ${streetNumber}`;
                    setUserLocatioin({
                        point : pt,
                        address
                    });
                });
            }
        }, {enableHighAccuracy: true});

        // PS:BMAP_STATUS_SUCCESS 状态码对应数字 0，表示定位成功
    }

    render() {
        const {title, buyNum, toggleLayer} = this.props;
        const userLocation = this.props.user.location ? this.props.user.location.address : "";

        return (
            <div className="commodity-buyInfo">
                <div className="item userItem" onClick={toggleLayer.bind(this, 0)}>
                    <span className="tip">已选</span>
                    <span className="userInfo">{title} x {buyNum}</span>
                </div>
                <div className="item userItem">
                    <span className="tip">送至</span>
                    <span className="userInfo">{userLocation}</span>
                </div>
                <div className="item miItem" onClick={toggleLayer.bind(this, 2)}>
                    <div className="service">
                        <img src={require("../../../static/icon/choose-orange.png")} alt="" width="100%" height="100%" />
                        <span>小米自营</span>
                    </div>
                    <div className="service">
                        <img src={require("../../../static/icon/choose-orange.png")} alt="" width="100%" height="100%" />
                        <span>小米发货</span>
                    </div>
                    <div className="service">
                        <img src={require("../../../static/icon/choose-orange.png")} alt="" width="100%" height="100%" />
                        <span>7天无理由退货</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyInfo;