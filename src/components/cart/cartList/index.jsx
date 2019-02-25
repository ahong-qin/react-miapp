import React, {Component} from 'react';
import {connect} from "react-redux";

import {
    addCart,
    delCart,
    updateGoodsChecked,
    updateTotalNum,
    updateTotalBuyNum,
    resetTotalPrice
} from "../../../actions/cart";

import "./css/index.scss";

@connect(
    state => ( {cart : state.cart} ),
    {addCart, delCart, updateGoodsChecked, updateTotalNum, updateTotalBuyNum, resetTotalPrice}
)
class CartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsInfo : []
        };
    }

    componentDidMount() {
        const {cart} = this.props;
        const {goodsInfo} = this.state;

        Object.keys(cart.goods).forEach(item => {
            fetch("http://47.100.98.54:9020/api/buygoods/" + item)
                .then(res => res.json())
                .then(res => {
                    res.buyNum = cart.goods[item];
                    goodsInfo.push(res);
                    this.setState({goodsInfo});
                });
        });
    }

    // goodsInfo 每次更新，重新计算总价，重置 redux 的 totalPrice
    componentDidUpdate(prevProps, prevState) {
        let totalPrice = 0;

        this.state.goodsInfo.forEach(item => {
            if( this.props.cart.goodsChecked[item.shopid] ){
                totalPrice += item.buyNum * item.price;
            }
        });

        if( totalPrice !== this.props.cart.totalPrice ){
            this.props.resetTotalPrice(totalPrice);
        }
    }

    handleAddGoodsBuyNum = (index, addNum) => {
        const {addCart, updateTotalNum, updateTotalBuyNum} = this.props;
        const {goodsInfo} = this.state;
        const {shopid} = goodsInfo[index];

        addCart({
            shopid,
            num : addNum
        });
        updateTotalNum(addNum);
        if( this.props.cart.goodsChecked[shopid] ) updateTotalBuyNum(addNum);

        goodsInfo[index].buyNum += addNum;
        this.setState({goodsInfo});
    };

    handleMinusGoodsBuyNum = (index, minusNum) => {
        const {addCart, updateTotalNum, updateTotalBuyNum} = this.props;
        const {goodsInfo} = this.state;
        const {shopid} = goodsInfo[index];

        if( goodsInfo[index].buyNum > 1 ){
            addCart({
                shopid,
                num : minusNum
            });
            updateTotalNum(minusNum);
            this.props.cart.goodsChecked[shopid] && updateTotalBuyNum(minusNum);

            goodsInfo[index].buyNum += minusNum;
            this.setState({goodsInfo});
        }
    };

    handleDelGoods = index => {
        const {goodsInfo} = this.state;
        const {delCart, updateTotalNum, updateTotalBuyNum} = this.props;
        const {shopid} = goodsInfo[index];

        // 先删除 redux 上的数据
        delCart({shopid});
        updateTotalNum(-1 * goodsInfo[index].buyNum);
        this.props.cart.goodsChecked[shopid] && updateTotalBuyNum(-1 * goodsInfo[index].buyNum);

        // 再更新当前组件的 state 数据
        goodsInfo.splice(index, 1);
        this.setState({goodsInfo});
    };

    handleToggleChecked = index => {
        const {cart, updateGoodsChecked, updateTotalBuyNum} = this.props;
        const {goodsInfo} = this.state;
        const {shopid, buyNum} = goodsInfo[index];

        const nowChecked = !cart.goodsChecked[shopid];
        updateGoodsChecked({
            shopid,
            checked : nowChecked
        });
        if( nowChecked ){
            updateTotalBuyNum(buyNum);
        }else{
            updateTotalBuyNum(-1 * buyNum);
        }
    };

    render() {
        const {goods, goodsChecked} = this.props.cart;
        const {goodsInfo} = this.state;

        return (
            <div className="cart-list">
                <ul>
                    {
                        goodsInfo.length > 0 && goodsInfo.map((item, index) => {
                            const {shopid, picurl, title, price, buyNum} = item;
                            return (
                                <li key={index}>
                                    <div
                                        className={`choose${goodsChecked[shopid] ? " checked" : ""}`}
                                        onClick={this.handleToggleChecked.bind(this, index)}
                                    ><i /></div>
                                    <div className="productImg">
                                        <img src={picurl} alt={title} width="100%" height="100%" />
                                    </div>
                                    <div className="productInfo">
                                        <div className="text">{title}</div>
                                        <div className="price">售价：{price}元</div>
                                        <div className="operation">
                                            <div className="count">
                                                <div
                                                    className={`btn minus ${buyNum > 1 ? "active" : ""}`}
                                                    onClick={this.handleMinusGoodsBuyNum.bind(this, index, -1)}
                                                ><i /></div>

                                                <div className="num">{goods[shopid]}</div>

                                                <div
                                                    className="btn add active"
                                                    onClick={this.handleAddGoodsBuyNum.bind(this, index, 1)}
                                                ><i /></div>
                                            </div>
                                            <div
                                                className="delete"
                                                onClick={this.handleDelGoods.bind(this, index)}
                                            ><i /></div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default CartList;