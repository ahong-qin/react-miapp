import React, {Component} from 'react';

import Header from "./header/index";
import Popular from "./popular/index";
import Category from "./category/index";

class Search extends Component {
    render() {
        return (
            <div className="App-search">
                <Header />
                <div className="page-wrapper">
                    <Popular />
                    <Category />
                </div>
            </div>
        );
    }
}

export default Search;