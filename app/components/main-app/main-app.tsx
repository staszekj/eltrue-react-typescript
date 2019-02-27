import * as React from 'react'
import {MainAppType} from 'type/components/main-app/main-app.type';
import './main-app.scss'
import {TwoInputs} from '../two-inputs/two-inputs';

export const MainApp: MainAppType = ({}) => {

    const handler = (a: string, b: string) => {
        console.log('SJA:', a, b)
        return undefined
    }

    return (
        <div className="main-app">
            <div className="header"><span className="header-value-1">60</span>&nbsp;+&nbsp;<span
                className="header-value-2">40</span>&nbsp;=&nbsp;<span className="header-value-result">100</span></div>
            <div className="main">
                <div className="left-panel">
                    <div className="values">
                        <div className="value-container value1" style={{width: '60px'}}><span
                            className="text">60</span>
                        </div>
                        <div className="value-container value2" style={{width: '40px'}}><span
                            className="text">40</span>
                        </div>
                    </div>
                </div>
                <TwoInputs inputOne={'10'} rightInput={'20'} onChange={handler}/>
            </div>
        </div>
    )
}

export default MainApp