import * as React from 'react';
import {FunctionComponent} from 'react';
import {MouseEventHandler} from 'react';
import {ReactComponentElement} from 'react';
import {ColorCssClassEnum, TwoBarsType} from '../../../type/components/two-bars/two-bars.type';

export type HeaderValuesPropsType = {
    colorClass: ColorCssClassEnum,
    leftValue: number | null,
    rightValue: number | null,
    result: number | null
}
export type HeaderValuesTypes = FunctionComponent<HeaderValuesPropsType>

export type HeaderValuesFactoryFnType = (colorClass: ColorCssClassEnum) =>
    (leftValue: number | null, rightValue: number | null, resultValue: number | null) => ReactComponentElement<HeaderValuesTypes>

export const format: (val: number | null) => string = (val) => {
    if (val === null) {
        return '_'
    }
    return '' + val
}

export const HeaderValuesFactory: HeaderValuesFactoryFnType = (colorClass) => (leftValue, rightValue, resultValue) => {
    return (
        <HeaderValues colorClass={colorClass} leftValue={leftValue} rightValue={rightValue} result={resultValue}/>
    )
}

export const HeaderValues: HeaderValuesTypes = (props) => {
    const colorClass = props.colorClass
    const leftValue: string = format(props.leftValue)
    const rightValue: string = format(props.rightValue)
    const resultValue: string = format(props.result)
    return (
        <div className="header">
            <div className={colorClass}>
                <span className="header-value-1">{leftValue}</span>
                &nbsp;+&nbsp;
                <span className="header-value-2">{rightValue}</span>
                &nbsp;=&nbsp;
                <span className="header-value-result">{resultValue}</span>
            </div>
        </div>
    )
}