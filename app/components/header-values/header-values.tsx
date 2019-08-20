import * as React from 'react';
import {FunctionComponent, useContext} from 'react';
import {ReactComponentElement} from 'react';
import {ColorCssClassEnum} from '../../containers/two-bars/two-bars-container';
import {TwoInputsCtx} from "app/contexts/two-inputs-ctx"

export type HeaderValuesPropsType = {
    colorClass: ColorCssClassEnum,
    leftValue: number | null,
    rightValue: number | null,
    result: number | null
}

export const format: (val: number | null) => string = (val) => {
    if (val === null) {
        return '_'
    }
    return '' + val
}

export const HeaderValues: FunctionComponent<HeaderValuesPropsType> = (props) => {
    const colorClass = props.colorClass
    const leftValue: string = format(props.leftValue)
    const rightValue: string = format(props.rightValue)
    const resultValue: string = format(props.result)

    const twoInputsCtx = useContext(TwoInputsCtx);

    return (
        <>
            <div className="header">
                <div className={colorClass}>
                    <span className="header-value-1">{leftValue}</span>
                    &nbsp;+&nbsp;
                    <span className="header-value-2">{rightValue}</span>
                    &nbsp;=&nbsp;
                    <span className="header-value-result">{resultValue}</span>
                </div>
                {twoInputsCtx && <div>{`Counters: ${twoInputsCtx.leftCounter}, ${twoInputsCtx.rightCounter}`}</div>}
            </div>
        </>
    )
}
