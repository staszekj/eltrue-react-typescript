import * as React from 'react'
import {onChangeFnType} from 'type/components/two-inputs/two-inputs.type';
import {useState} from 'react';
import {
    TwoValuesContainerStateType,
    TwoValuesContainerType, ValidateFnType
} from 'type/containers/two-values/two-values-container.type';
import {TwoInputs} from 'app/components/two-inputs/two-inputs';
import {parse} from 'app/containers/two-values-parser';

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

    return (
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
    )
}