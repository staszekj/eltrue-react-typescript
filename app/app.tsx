import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import MainApp from "app/components/main-app";
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import {twoBarsReducer} from 'app/redux/two-bars/two-bars';
import {Provider} from 'react-redux';


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    twoBars: twoBarsReducer
});
export const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <MainApp/>
    </Provider>,

    document.querySelector('#main-app')
)
