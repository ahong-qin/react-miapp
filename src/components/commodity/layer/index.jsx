import React, {Component} from 'react';
import {connect} from "react-redux";

import {
    addCart,
    updateGoodsChecked,
    updateTotalNum,
    updateTotalBuyNum
} from "../../../actions/cart";

import "./css/inde.scss";

@connect(
    state => ( {cart : state.cart} ),
    {addCart, updateGoodsChecked, updateTotalNum, updateTotalBuyNum}
)
class Layer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layerContent : this.props.layerContent,
            shopid : this.props.shopid,
            goodsPic : this.props.goodsPic,
            title : this.props.title
        };
    }

    handleAddToCart = buyNum => {
        const {addCart, updateGoodsChecked, updateTotalNum, updateTotalBuyNum, resetBuyNum, cancelLayer} = this.props;
        const {shopid} = this.state;

        addCart({
            shopid,
            num : buyNum
        });
        updateGoodsChecked({
            shopid,
            checked : true
        });
        updateTotalNum(buyNum);
        updateTotalBuyNum(buyNum);

        resetBuyNum();
        cancelLayer();
    };

    render() {
        const {layerContent, goodsPic} = this.state;
        const {title, buyNum, minusBuyNum, addBuyNum} = this.props;
        const {cancelLayer} = this.props;

        return (
            <div className="commodity-layer">
                {
                    layerContent === 0 && (
                        <div className="user-product">
                            <div className="close clearfix">
                                <i onClick={cancelLayer} />
                            </div>
                            <div className="goods">
                                <div className="img">
                                    <img src={goodsPic} alt="" width="100%" height="100%" />
                                </div>
                                <div className="info">
                                    <div className="price">￥1499</div>
                                    <div className="word">{title}</div>
                                </div>
                            </div>
                            <div className="option-wrapper">
                                <div className="option buyNum">
                                    <div className="option-title">购买数量</div>
                                    <div className="count">
                                        <div
                                            className={`btn minus ${buyNum > 1 ? "active" : ""}`}
                                            onClick={minusBuyNum}
                                        ><i /></div>
                                        <div className="num">{buyNum}</div>
                                        <div
                                            className="btn add active"
                                            onClick={addBuyNum}
                                        ><i /></div>
                                    </div>
                                </div>
                                <div className="option ywb">
                                    <div className="option-title">
                                        <span>意外保护</span>
                                        <a href="https://api.jr.mi.com/activity/accidentIns/?from=mishop&insuranceSku=21797">
                                            <img src={require("../../../static/icon/yiwen.png")} alt="" width="100%" height="100%" />
                                        </a>
                                    </div>
                                    <div className="option-item-wrapper">
                                        <div className="option-item">
                                            <span>全年意外保障服务</span>
                                            <span>99元</span>
                                        </div>
                                        <div className="option-item">
                                            <span>全年碎屏保障服务</span>
                                            <span>59元</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="option ycb">
                                    <div className="option-title">
                                        <span>延长保修</span>
                                        <a href="https://api.jr.mi.com/activity/accidentIns/?from=mishop&insuranceSku=21962">
                                            <img src={require("../../../static/icon/yiwen.png")} alt="" width="100%" height="100%" />
                                        </a>
                                    </div>
                                    <div className="option-item-wrapper">
                                        <div className="option-item">
                                            <span>延长保修服务</span>
                                            <span>29元</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="addCart">
                                <div
                                    onClick={this.handleAddToCart.bind(this, buyNum)}
                                >加入购物车</div>
                            </div>
                        </div>
                    )
                }
                {
                    layerContent === 2 && (
                        <div className="service-des">
                            <div className="title">服务说明</div>
                            <div className="close">
                                <i onClick={this.state.handleCancelLayer} />
                            </div>
                            <div className="service-item">
                                <i />
                                <div className="item-info">
                                    <div className="name">小米自营</div>
                                </div>
                            </div>
                            <div className="service-item">
                                <i />
                                <div className="item-info">
                                    <div className="name">小米发货</div>
                                    <div className="brief">由小米发货</div>
                                </div>
                            </div>
                            <div className="service-item">
                                <i />
                                <div className="item-info">
                                    <div className="name">7天无理由退货</div>
                                </div>
                            </div>
                            <div className="service-item">
                                <i />
                                <div className="item-info">
                                    <div className="name">运费说明</div>
                                    <div className="brief">
                                        由小米发货的商品，单笔满150元免运费; 由第三方商家发货的商品，免运费; 特殊商品需要单独收取运费，具体以实际结算金额为准；优惠券等不能抵扣运费金额;
                                    </div>
                                </div>
                            </div>
                            <div className="service-item">
                                <i />
                                <div className="item-info">
                                    <div className="name">售后服务政策</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Layer;