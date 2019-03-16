import * as React from 'react'
import {TwoBarsContainer} from '../../containers/two-bars/two-bars-container';
import {ReactElement} from 'react';
import {JSXElementConstructor} from 'react';

import './main-app.scss'

export type MainAppType = ({}) => ReactElement<{}, JSXElementConstructor<HTMLDivElement>>

export const MainApp: MainAppType = ({}) => {

    return (
        <div className="main-app">
            <TwoBarsContainer/>
        </div>
    )
}

export default MainApp