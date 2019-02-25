import React, {Component} from 'react';
import {connect} from "react-redux";

import {Map, Marker} from "react-bmap";
import TabBar from "../tabBar";

@connect(
    state => ( {user : state.user} )
)
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapCenter : {lng: 116.404, lat: 39.915}
        };
    }

    componentDidMount() {
        const {updateMapCenter} = this;

        const userLocation = this.props.user.location;

        if( userLocation ){
            updateMapCenter(userLocation.point);
        }else{
            const {BMap, BMAP_STATUS_SUCCESS} = window;
            const geolocation = new BMap.Geolocation();   // 用于定位的对象实例
            geolocation.getCurrentPosition(function(result){
                if( this.getStatus() === BMAP_STATUS_SUCCESS ){
                    // 此回调函数无法访问组件实例，因此需将地址信息挂载到 state 上时，应在外部定义一个更新 state 的箭头函数
                    updateMapCenter(result.point)
                }
            }, {enableHighAccuracy: true});
        }
    }

    updateMapCenter = newPoint => {
        this.setState({
            mapCenter : newPoint
        });
    };

    render() {
        const {mapCenter} = this.state;

        return (
            <div>
                <div className="map-container">
                    <Map
                        style={{height: "100vh"}}
                        center={mapCenter}
                        zoom="12"
                    >
                        <Marker position={mapCenter}/>
                    </Map>
                </div>
                <TabBar />
            </div>
        );
    }
}

export default Category;