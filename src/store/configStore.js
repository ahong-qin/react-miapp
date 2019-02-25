import {createStore} from "redux";

import Reducers from "../reducers/index";

export default function(init){
    return createStore(
        Reducers,
        init,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
};