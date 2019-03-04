import * as React from 'react'
import {MainAppType} from 'type/components/main-app/main-app.type';
import {TwoValuesContainer} from 'app/containers/two-values-container';

import './main-app.scss'
import {Bar} from '../two-bars/bar';
import {BAR_CSS_CLASS} from 'type/components/two-bars/bar.type';
import {TwoBars} from 'app/components/two-bars/two-bars';
import {ColorCssClassEnum} from 'type/components/two-bars/two-bars.type';

export const MainApp: MainAppType = ({}) => {

    return (
        <div className="main-app">
            <div className="header"><span className="header-value-1">60</span>&nbsp;+&nbsp;<span
                className="header-value-2">40</span>&nbsp;=&nbsp;<span className="header-value-result">100</span></div>
            <div className="main">
                <div className="left-panel">
                    <TwoBars colorClass={ColorCssClassEnum.regularColor}
                             leftBar={<Bar cssClass={BAR_CSS_CLASS.LEFT_BAR} width={40}/>}
                             rightBar={<Bar cssClass={BAR_CSS_CLASS.RIGHT_BAR} width={60}/>}/>
                </div>
                <div className={'right-panel background-color-green'}>
                    <TwoValuesContainer leftInput={"10"} rightInput={"20"}/>
                </div>
            </div>
        </div>
    )
}

export default MainApp