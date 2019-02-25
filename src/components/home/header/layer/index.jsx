import React, {Component} from 'react';

import "./css/inde.scss";

class Layer extends Component {
    state = {
        item : this.props.item
    };

    render() {
        return (
            <div className="layer">
                <div className="title">全部</div>
                <div className="items">
                    {
                        this.state.item.length > 0 && (
                            this.state.item.map((item, index) => {
                                return (
                                    <span key={index}>{item}</span>
                                );
                            })
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Layer;