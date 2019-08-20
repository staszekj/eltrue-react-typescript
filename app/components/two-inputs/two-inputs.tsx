import * as React from 'react'
import {ChangeEvent, FunctionComponent} from 'react';
import {TwoInputsPropType} from 'app/containers/two-inputs/two-values-container';
import {validate} from 'app/containers/two-inputs/two-values-calculator';

export const TwoInputs: FunctionComponent<TwoInputsPropType> = (props) => {

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
            <input className={leftCss} value={props.leftInput} onChange={leftInputOnChangeHandler}
                   onClick={props.onLeftInputClick}/>
            <input className={rightCss} value={props.rightInput} onChange={rightInputOnChangeHandler}
                   onClick={props.onRightInputClick}/>
        </div>
    )
}
