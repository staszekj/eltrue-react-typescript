import * as React from 'react'
import {TwoInputsType} from 'type/components/two-inputs/two-inputs.type';
import {ChangeEvent} from 'react';

export const TwoInputs: TwoInputsType = (props) => {

    const leftInputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value, props.rightInput)
    }

    const rightInputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(props.leftInput, e.target.value)
    }

    return (
        <div className={'right-panel background-color-green'}>
            <input className={'input1'} value={props.leftInput} onChange={leftInputOnChangeHandler}/>
            <input className={'input2'} value={props.rightInput} onChange={rightInputOnChangeHandler}/>
        </div>
    )
}