import * as React from 'react';
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