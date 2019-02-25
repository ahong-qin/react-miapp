export default function(state={}, action){
    const data = action.data;

    switch (action.type) {
        case "SET_USER_LOCATION":
            // 需要返回一个全新的对象，若返回同一个对象的引用，组件不会执行生命周期函数
            // 理解：react 通过相关算法去计算是否更新组件时，会误认为数据无变化
            return Object.assign({}, state, {
                location: data
            });

        default:
            return state;
    }
}
