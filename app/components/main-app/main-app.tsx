import * as React from 'react'
import {MainAppType} from 'type/components/main-app/main-app.type';
import {TwoValuesContainer} from 'app/containers/two-values-container';

import './main-app.scss'
import {twoBarsFactory} from 'app/components/two-bars/two-bars';
import {ColorCssClassEnum} from 'type/components/two-bars/two-bars.type';

export const MainApp: MainAppType = ({}) => {

    return (
        <div className="main-app">
            <div className="header"><span className="header-value-1">60</span>&nbsp;+&nbsp;<span
                className="header-value-2">40</span>&nbsp;=&nbsp;<span className="header-value-result">100</span></div>
            <TwoValuesContainer twoBarsFactoryFn={twoBarsFactory(ColorCssClassEnum.bwColor)}/>
        </div>
    )
}

export default MainApp