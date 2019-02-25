import React, {Component} from 'react';

import Header from "./header/index";
import Banner from "./banner/index";
import Category from "./category/index";
import Recommend from "./recommend/index";
import Ad from "./ad/index";
import Goods from "./goods/index";
import KnowMi from "./knowMi/index";
import Affix from "./affix/index";
import TabBar from "../tabBar/index";

class Home extends Component {
    render() {
        return (
            <div className="App-home" style={{marginBottom : "1.04rem"}}>
                <Header />
                <Banner />
                <Category />
                <Recommend />
                <Ad />
                <Goods />
                <KnowMi />
                <Affix />
                <TabBar />
            </div>
        );
    }
}

export default Home;