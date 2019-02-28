import * as React from 'react'
import {onChangeFnType, TwoInputsType} from 'type/components/two-inputs/two-inputs.type';
import {ChangeEvent, useState} from 'react';
import {
    TwoValuesContainerStateType,
    TwoValuesContainerType
} from 'type/containers/two-values/two-values-container.type';
import {TwoInputs} from 'app/components/two-inputs/two-inputs';

export const TwoValuesContainer: TwoValuesContainerType = ({}) => {
    const [inputValues, setInputValues] = useState<TwoValuesContainerStateType>(
        {
            leftInput: '20',
            rightInput: ''
        })
    const onChangeHandler: onChangeFnType = (leftInput, rightInput) => {
        setInputValues({
            leftInput,
            rightInput
        })
    }
    return (
        <TwoInputs
            leftInput={inputValues.leftInput}
            rightInput={inputValues.rightInput}
            onChange={onChangeHandler}/>
    )
}