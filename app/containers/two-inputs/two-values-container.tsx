import * as React from 'react'
import {FunctionComponent, MouseEventHandler, useContext, useState} from 'react'
import {TwoInputs} from 'app/components/two-inputs/two-inputs';
import {
    getAsNumber,
    parse,
    slowdown, sumUpInputValues
} from 'app/containers/two-inputs/two-values-calculator';
import {TwoBars} from 'app/components/two-bars/two-bars';
import {Bar, BarPropType} from 'app/components/two-bars/bar';
import {HeaderValues, HeaderValuesPropsType} from '../../components/header-values/header-values';
import {ColorCssClassEnum} from '../two-bars/two-bars-container';
import {useTwoInputs, initState} from './useTwoInputs'
import {TwoInputsCtx} from "app/contexts/two-inputs-ctx"

export const enum BAR_CSS_CLASS {
    LEFT_BAR = 'value1',
    RIGHT_BAR = 'value2'
}

// types

export type TwoInputsValuesType = {
    leftInput: string,
    rightInput: string,
}

export type TwoInputsPropType = {
    leftInput: string,
    rightInput: string,
    onChange: onChangeFnType,
    onLeftInputClick: MouseEventHandler<HTMLInputElement>
    onRightInputClick: MouseEventHandler<HTMLInputElement>
}
export type TwoValuesContainerStateType = TwoInputsValuesType

export type TwoValuesContainerPropType = {
    colorClass: ColorCssClassEnum,
    clickHandler: MouseEventHandler<HTMLDivElement>,
}

export type onChangeFnType = (leftInput: string, rightInput: string) => void

export type BarClickHandlerType = MouseEventHandler<HTMLDivElement>

export type BarValuesType = {
    cssClass: BAR_CSS_CLASS,
    width: number,
    clickHandler: BarClickHandlerType
}

// implementation
export const TwoValuesContainer: FunctionComponent<TwoValuesContainerPropType> = (props) => {
    // const {inputValues, result, setTwoInputValues} = useTwoInputs();
    const [inputValues, setInputValues] = useState<TwoValuesContainerStateType>(initState)
    const [result, setResult] = useState<number | null>(sumUpInputValues(initState))
    const twoInputsCtx = useContext(TwoInputsCtx);

    const leftBarProps: BarPropType = {
        ...props,
        cssClass: BAR_CSS_CLASS.LEFT_BAR,
        width: getAsNumber(parse(inputValues.leftInput))
    }

    const rightBarProps: BarPropType = {
        ...props,
        cssClass: BAR_CSS_CLASS.RIGHT_BAR,
        width: getAsNumber(parse(inputValues.rightInput))
    }

    const twoInputValuesProps: TwoInputsValuesType = {
        ...inputValues
    }

    const twoInputProps: TwoInputsPropType = {
        ...twoInputValuesProps,

        onChange: (leftInput, rightInput) => {
            const inputValues: TwoInputsValuesType = {
                leftInput,
                rightInput
            }
            // setTwoInputValues(inputValues)
            setInputValues(inputValues)
            setResult(null)
            slowdown(2000)(sumUpInputValues(inputValues))
                .then(setResult)
        },

        onLeftInputClick: () => {
            twoInputsCtx && twoInputsCtx.handleLeftClick();
        },

        onRightInputClick: () => {
            twoInputsCtx && twoInputsCtx.handleRightClick();
        }
    }

    const headerValuesProps: HeaderValuesPropsType = {
        ...props,
        leftValue: parse(inputValues.leftInput),
        rightValue: parse(inputValues.rightInput),
        result: result
    }

    return (
        <div>
            <HeaderValues {...headerValuesProps}/>
            <div className="main">
                <div className="left-panel">
                    <TwoBars {...props}
                             leftBar={<Bar {...leftBarProps}/>}
                             rightBar={<Bar {...rightBarProps}/>}
                    />
                </div>
                <div className={'right-panel background-color-green'}>
                    <TwoInputs {...twoInputProps}/>
                </div>
            </div>
        </div>
    )
}
