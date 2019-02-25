import React, {Component} from 'react';

import "./css/index.scss";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail : this.props.detail
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            detail : nextProps.detail
        })
    }

    render() {
        const {title, symbol, price} = this.state.detail;

        return (
            <div className="commodity-detail">
                <div className="title">{title}</div>
                <div className="price">
                    <span>{symbol}</span>
                    <span>{price}</span>
                </div>
            </div>
        );
    }
}

export default Detail;