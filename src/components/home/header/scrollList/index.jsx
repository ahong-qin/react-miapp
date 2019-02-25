import React, {Component} from 'react';

import "./css/index.scss";

class ScrollList extends Component {
    state = {
        item : this.props.item
    };

    render() {
        return (
            <div className="list-wrap">
                <div className="list">
                    <ul>
                        {
                            this.state.item.length > 0 && (
                                this.state.item.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <span>{item}</span>
                                        </li>
                                    );
                                })
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ScrollList;