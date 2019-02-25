export function addCart (data) {
    return {
        type : "CART_ADD",
        data
    }
}

export function delCart (data) {
    return {
        type : "CART_DEL",
        data
    }
}

export function updateGoodsChecked(data) {
    return {
        type : "CART_GOODS_CHECKED",
        data
    }
}

// 更新购物车中的商品总数量
export function updateTotalNum (data) {
    return {
        type : "CART_TOTAL_NUM",
        data
    }
}

// 更新希望购买的商品总数量
export function updateTotalBuyNum (data) {
    return {
        type : "CART_TOTAL_BUYNUM",
        data
    }
}

export function resetTotalPrice (data) {
    return {
        type : "CART_TOTAL_PRICE",
        data
    }
}