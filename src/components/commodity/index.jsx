import React, {Component} from 'react';

import Header from "./header/index";
import Banner from "./banner/index";
import Detail from "./detail/index";
import BuyInfo from "./buyInfo/index";
import Share from "./share/index";
import Layer from "./layer/index";
import Mask from "./mask/index";
import TabBar from "./tabBar/index";

class Commodity extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : {},
            layer : {
                showLayer : false,
                layerContent : 0
            },
            shareOnOff : false,
            maskOnOff : false,
            buyNum : 1
        };
    }

    componentDidMount() {
        const {shopid} = this.props.match.params;
        fetch("http://47.100.98.54:9020/api/buygoods/" + shopid)
            .then(response => response.json())
            .then(data => {
                this.setState({data})
            });
    }

    handleToggleShare = () => {
        const shareOnOff = !this.state.shareOnOff;
        this.setState({
            shareOnOff,
            maskOnOff : shareOnOff
        })
    };

    handleToggleLayer = (layerContent) => {
        const showLayer = !this.state.layer.showLayer;
        this.setState({
            layer : {
                showLayer,
                layerContent
            }
        });
        this.handleToggleMask(showLayer);
    };

    handleToggleMask = (onOff) => {
        this.setState({
            maskOnOff : onOff
        })
    };

    handleMinusBuyNum = () => {
        let {buyNum} = this.state;
        if( buyNum > 1 ) buyNum--;
        this.setState({buyNum});
    };

    handleAddBuyNum = () => {
        let {buyNum} = this.state;
        buyNum++;
        this.setState({buyNum});
    };

    handleResetBuyNum = () => {
        this.setState({buyNum : 1})
    };

    render() {
        const {data, layer, shareOnOff, maskOnOff, buyNum} = this.state;
        const {shopid, picurl, title, symbol, price} = data;

        return (
            <div className="App-commodity"  style={{position : "relative"}}>
                <Header showShare={this.handleToggleShare} />
                <Banner
                    goodsPic={shopid ? picurl : []}
                />
                <Detail
                    detail={shopid ? {title, symbol, price} : {}}
                />
                <BuyInfo
                    title={title}
                    buyNum={buyNum}
                    toggleLayer={this.handleToggleLayer}
                    toggleMask={this.handleToggleMask}
                />
                <TabBar
                    toggleLayer={this.handleToggleLayer}
                />
                {
                    <Share
                        shareOnOff={shareOnOff}
                        hideShare={this.handleToggleShare}
                    />
                }
                {
                    layer.showLayer && (
                        <Layer
                            layerContent={layer.layerContent}
                            shopid={shopid}
                            goodsPic={picurl}
                            title={title}
                            buyNum={buyNum}
                            minusBuyNum={this.handleMinusBuyNum}
                            addBuyNum={this.handleAddBuyNum}
                            resetBuyNum={this.handleResetBuyNum}
                            cancelLayer={this.handleToggleLayer}
                        />
                    )
                }
                {
                    maskOnOff && <Mask />
                }
            </div>
        );
    }
}

export default Commodity;