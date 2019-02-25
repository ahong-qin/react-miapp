import React, {Component} from 'react';

import "./css/index.scss";

class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        fetch("http://47.100.98.54:9020/api/category")
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
        const {data} = this.state;
        return (
            <div className="home-category">
                <ul>
                    {
                        data.length > 0 && data.map(item => {
                            const {id, picurl, alt} = item;
                            return (
                                <li key={id}>
                                    <a href="/">
                                        <img src={picurl} alt={alt} width="100%" height="100%" />
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Category;