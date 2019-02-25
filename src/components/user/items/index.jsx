import React, {Component} from 'react';

import "./css/index.scss";

class Items extends Component {
    constructor(){
        super(...arguments);
        this.state = {
            data: this.props.data
        }
    }

    render() {
        const data = this.state.data;

        return (
            <ul className="items">
                {
                    data.length > 0 && data.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className="aEle">
                                    <div className="icon">
                                        <img src={item.icon} alt={item.word} />
                                    </div>
                                    <div
                                        className="word"
                                        style={{"borderTop" : (index === 0 ? "none" : "0.02rem solid #d9d9d9")}}
                                    >{item.word}</div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default Items;