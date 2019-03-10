import * as React from 'react'
import {ChangeEvent} from 'react';
import {validate} from 'app/containers/two-values-container';
import {FunctionComponent} from 'react';

export type TwoInputsValuesType = {
    leftInput: string,
    rightInput: string,
}

export type TwoInputsActionsType = {
    onChange: onChangeFnType
}

export type TwoInputsPropType = TwoInputsValuesType & TwoInputsActionsType

export type onChangeFnType = (leftInput: string, rightInput: string) => void

export type TwoInputsType = FunctionComponent<TwoInputsPropType>

export const TwoInputs: TwoInputsType = (props) => {

    const leftInputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value, props.rightInput)
    }

    const rightInputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(props.leftInput, e.target.value)
    }

    const leftErrorCss = validate(props.leftInput) ? '' : ' error';
    const rightErrorCss = validate(props.rightInput) ? '' : ' error';
    const leftCss = `input1${leftErrorCss}`
    const rightCss = `input2${rightErrorCss}`

    return (
        <div>
            <input className={leftCss} value={props.leftInput} onChange={leftInputOnChangeHandler}/>
            <input className={rightCss} value={props.rightInput} onChange={rightInputOnChangeHandler}/>
        </div>
    )
}