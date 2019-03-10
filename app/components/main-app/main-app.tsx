import * as React from 'react'
import {MainAppType} from 'type/components/main-app/main-app.type';
import {TwoValuesContainer} from 'app/containers/two-values-container';

import './main-app.scss'
import {twoBarsFactory} from 'app/components/two-bars/two-bars';
import {ColorCssClassEnum} from 'type/components/two-bars/two-bars.type';
import {TwoBarsContainer} from '../../containers/two-bars/two-bars-container';

export const MainApp: MainAppType = ({}) => {

    return (
        <div className="main-app">
            <TwoBarsContainer/>
        </div>
    )
}

export default MainApp