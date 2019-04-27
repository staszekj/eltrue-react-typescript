import {ReactElement} from 'react';
import {JSXElementConstructor} from 'react';
import * as React from 'react'
import {TwoBarsReduxContainer} from 'app/containers/two-bars/two-bars-redux-container';

import './main-app.scss'

export type MainAppType = ({}) => ReactElement<{}, JSXElementConstructor<HTMLDivElement>>

export const MainApp: MainAppType = ({}) => {

    return (
        <div className="main-app">
            <TwoBarsReduxContainer/>
        </div>
    )
}

export default MainApp
