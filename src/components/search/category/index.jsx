import React, {Component} from 'react';

import "./css/index.scss";

class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            commonCategory : ["手机", "电视", "笔记本", "盒子", "路由器", "手环", "平板", "手表", "投影", "VR", "穿戴", "影音", "空气净化器"]
        };
    }

    render() {
        return (
            <div className="search-category">
                <h5>常用分类</h5>
                <div className="keys">
                    <ul>
                        {
                            this.state.commonCategory.map((item, index) => {
                                return (<li key={index}>{item}</li>);
                            })
                        }
                    </ul>

                </div>
            </div>
        );
    }
}

export default Category;