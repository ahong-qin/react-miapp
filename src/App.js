import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import routes from "./router/index";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {
                        routes.map((item, index) => {
                            return (
                                <Route key={index} {...item} />
                            );
                        })
                    }
                </Switch>
            </Router>
        );
    }
}

export default App;