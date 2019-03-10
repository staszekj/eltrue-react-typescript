import * as React from 'react'
import {MainAppType} from 'type/components/main-app/main-app.type';

import './main-app.scss'
import {TwoBarsContainer} from '../../containers/two-bars/two-bars-container';

export const MainApp: MainAppType = ({}) => {

    return (
        <div className="main-app">
            <TwoBarsContainer/>
        </div>
    )
}

export default MainApp