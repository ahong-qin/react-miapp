// cartTools 对象存储了与购物车相关的工具类函数
const cartTools = {};

// cart 用于存储用户的购物车商品信息
const defaultCart = {
    goods : {},
    goodsChecked : {},
    totalNum : 0,
    totalBuyNum : 0,
    totalPrice : 0
};
const cart = JSON.parse(window.localStorage.getItem("cart")) || defaultCart;

// 加入购物车：更新购物车数据
cartTools.addCartUpdate = function (goodsInfo) {
    if( cart.goods[goodsInfo.shopid] ){
        cart.goods[goodsInfo.shopid] += goodsInfo.num;
    }else{
        cart.goods[goodsInfo.shopid] = goodsInfo.num;
    }
    cartTools.saveCart();
};

cartTools.delCart = function (shopid) {
    delete cart.goods[shopid];
    delete cart.goodsChecked[shopid];
    cartTools.saveCart();
};

cartTools.goodsCheckedUpdate = function (data) {
    cart.goodsChecked[data.shopid] = data.checked;
    cartTools.saveCart();
};

cartTools.totalNumUpdate = function (num) {
    cart.totalNum += num;
    cartTools.saveCart();
};

cartTools.totalBuyNumUpdate = function (buyNum) {
    cart.totalBuyNum += buyNum;
    cartTools.saveCart();
};

cartTools.totalPriceReset = function (price) {
    cart.totalPrice = price;
    cartTools.saveCart();
};

// 利用本地存储将购物车信息保存起来
cartTools.saveCart = function () {
    window.localStorage.setItem("cart", JSON.stringify(cart));
};

cartTools.getCart = function () {
    return JSON.parse(window.localStorage.getItem("cart")) || defaultCart;
};

export default cartTools;