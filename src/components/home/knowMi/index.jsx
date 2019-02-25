import React, {Component} from 'react';

class KonwMi extends Component {
    render() {
        return (
            <div className="home-knowMi">
                <a href="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/63ba4b56717e.html">
                    <img
                        src={require("./img/know-mi.png")}
                        alt="了解小米"
                        width="100%"
                        style={{display : "block"}}
                    />
                </a>
            </div>
        );
    }
}

export default KonwMi;