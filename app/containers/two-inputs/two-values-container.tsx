import * as React from 'react'
import {onChangeFnType, TwoInputsValuesType} from 'app/components/two-inputs/two-inputs';
import {useState} from 'react';
import {TwoInputs} from 'app/components/two-inputs/two-inputs';
import {parse} from 'app/containers/two-inputs/two-values-parser';
import {HeaderValuesFactoryFnType} from 'app/components/header-values/header-values';
import {TwoBarsFactoryType} from 'type/components/two-bars/two-bars.type';
import {FunctionComponent} from 'react';

export type TwoValuesContainerStateType = TwoInputsValuesType
export type TwoValuesContainerPropType = {
    twoBarsFactoryFn: ReturnType<TwoBarsFactoryType>,
    headerValuesFactoryFn: ReturnType<HeaderValuesFactoryFnType>
}
export type TwoValuesContainerType = FunctionComponent<TwoValuesContainerPropType>

export type ParseFnType = (value: string) => number | null
export type ValidateFnType = (value: string) => boolean

export const validate: ValidateFnType = (value) => {
    return parse(value) !== null
}

export const TwoValuesContainer: TwoValuesContainerType = (props) => {
    const initState: TwoValuesContainerStateType = {
        leftInput: '10',
        rightInput: '20'
    }
    const [inputValues, setInputValues] = useState<TwoValuesContainerStateType>(initState)
    const onChangeHandler: onChangeFnType = (leftInput, rightInput) => {
        setInputValues({
            leftInput,
            rightInput
        })
    }

    const leftInputParsed: number | null = parse(inputValues.leftInput)
    const leftInputNumber: number = leftInputParsed ? leftInputParsed : 0

    const rightInputParsed: number | null = parse(inputValues.rightInput)
    const rightInputNumber: number = rightInputParsed ? rightInputParsed : 0

    const resultNumber: number | null =
        leftInputParsed === null || rightInputParsed === null ? null : leftInputParsed + rightInputParsed

    return (
        <div>
            {props.headerValuesFactoryFn(leftInputParsed, rightInputParsed, resultNumber)}
            <div className="main">
                <div className="left-panel">
                    {props.twoBarsFactoryFn(leftInputNumber, rightInputNumber)}
                </div>
                <div className={'right-panel background-color-green'}>
                    <TwoInputs
                        leftInput={inputValues.leftInput}
                        rightInput={inputValues.rightInput}
                        onChange={onChangeHandler}/>
                </div>
            </div>
        </div>
    )
}