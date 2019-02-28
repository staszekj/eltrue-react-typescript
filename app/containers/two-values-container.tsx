import * as React from 'react'
import {onChangeFnType, TwoInputsType} from 'type/components/two-inputs/two-inputs.type';
import {ChangeEvent, useState} from 'react';
import {
    ParseFnType,
    TwoValuesContainerStateType,
    TwoValuesContainerType, ValidateFnType
} from 'type/containers/two-values/two-values-container.type';
import {TwoInputs} from 'app/components/two-inputs/two-inputs';
import {parse} from './two-values-parser';

export const validate: ValidateFnType = (value) => {
    return parse(value) !== null
}

export const TwoValuesContainer: TwoValuesContainerType = (initState) => {
    const [inputValues, setInputValues] = useState<TwoValuesContainerStateType>(initState)
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