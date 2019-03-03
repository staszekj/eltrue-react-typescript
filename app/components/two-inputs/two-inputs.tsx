import * as React from 'react'
import {TwoInputsType} from 'type/components/two-inputs/two-inputs.type';
import {ChangeEvent} from 'react';
import {validate} from 'app/containers/two-values-container';

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
        <>
            <input className={leftCss} value={props.leftInput} onChange={leftInputOnChangeHandler}/>
            <input className={rightCss} value={props.rightInput} onChange={rightInputOnChangeHandler}/>
        </>
    )
}