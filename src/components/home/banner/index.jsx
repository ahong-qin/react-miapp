import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Swiper from "swiper/dist/js/swiper.min";

import "./css/index.scss";

class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        };
    }

    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/banner")
            .then(response => response.json())
            .then(data => {
                if( data.status === 200 ){
                    this.setState({
                        data : data.data
                    });
                }
            });
    }

    componentDidUpdate(prevProps, prevState) {
        new Swiper(".swiper-container", {
            pagination : {
                el : ".swiper-pagination"
            },
            loop : true,
            autoplay : true
        });
    }

    render() {
        const {data} = this.state;

        return (
            <div className="home-banner swiper-container">
                <ul className="pic swiper-wrapper">
                    {
                        data.length > 0 && data.map(item => {
                            const {id, shopid, picurl, alt} = item;
                            return (
                                <li key={id} className="swiper-slide">
                                    <Link to={`/commodity/detail/${shopid}`}>
                                        <img src={picurl} alt={alt} width="100%" />
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className="swiper-pagination" />
            </div>
        );
    }
}

export default Banner;