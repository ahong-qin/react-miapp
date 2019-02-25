import React, {Component} from 'react';
import Swiper from "swiper/dist/js/swiper.min";

import "./css/index.scss";

class Banner extends Component {
    constructor(props){
        super(props);
        this.state={
            goodsPic : this.props.goodsPic
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const {goodsPic} = this.state;
        if( goodsPic.indexOf(nextProps.goodsPic) === -1 ) goodsPic.push(nextProps.goodsPic);
        this.setState({goodsPic})
    }

    componentDidUpdate(prevProps, prevState) {
        const commoditySwiper = new Swiper(".swiper-container", {
            pagination: {
                el: ".swiper-pagination",
            },
            on : {
                touchStart : forbidSlide
            }
        });

        function forbidSlide() {
            commoditySwiper.allowSlidePrev = !commoditySwiper.isBeginning;
            commoditySwiper.allowSlideNext = !commoditySwiper.isEnd;
        }
    }

    render() {
        const {goodsPic} = this.state;

        return (
            <div className="commodity-banner swiper-container">
                <ul className="pic swiper-wrapper">
                    {
                        goodsPic.length > 0 && goodsPic.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="swiper-slide"
                                >
                                    <div className="img">
                                        <img src={item} alt="" width="100%" height="100%" />
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
                {
                    goodsPic.length > 1 && <div className="swiper-pagination" />
                }
            </div>
        );
    }
}

export default Banner;