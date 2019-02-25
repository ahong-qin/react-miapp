import cartTools from "../tools/cartTools";

const {
    addCartUpdate,
    delCart,
    goodsCheckedUpdate,
    totalNumUpdate,
    totalBuyNumUpdate,
    totalPriceReset,
    getCart
} = cartTools;

export default function(state=getCart(), action){
    const data = action.data;

    switch (action.type) {
        case "CART_ADD":
            // data 是 {"shopid" : "buyNum"} 格式的对象
            addCartUpdate(data);
            return getCart();

        case "CART_DEL":
            // data 是 {"shopid" : "buyNum"} 格式的对象
            delCart(data.shopid);
            return getCart();

        case "CART_GOODS_CHECKED":
            // data 是 {"shopid" : Boolean} 格式的对象
            goodsCheckedUpdate(data);
            return getCart();

        case "CART_TOTAL_NUM":
            // data 是 Number 数据，是每次用户操作购买数量的 增加量 或 减少量
            totalNumUpdate(data);
            return getCart();

        case "CART_TOTAL_BUYNUM":
            // data 是 Number 数据，是每次用户操作购买数量的 增加量 或 减少量
            totalBuyNumUpdate(data);
            return getCart();

        case "CART_TOTAL_PRICE":
            // data 是 Number 数据，是添加到购物车里的所有商品总价
            totalPriceReset(data);
            return getCart();

        default:
            return state;
    }
}