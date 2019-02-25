import React, {Component} from 'react';

import "./css/index.scss";

class Ad extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : {}
        };
    }

    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/conference")
            .then(response=>response.json())
            .then(data=>{
                if( data.status === 200 ){
                    this.setState({
                        data : data.data
                    })
                }
            });
    }

    render() {
        const {picurl, alt} = this.state.data;
        return (
            <div className="home-ad">
                <div className="ad-spacing" />
                <div className="ad-img">
                    <a href="/">
                        <img src={picurl} alt={alt} width="100%" height="100%" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Ad;