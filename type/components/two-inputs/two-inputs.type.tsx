import * as React from 'react';
import {FunctionComponent} from 'react';

export type TwoInputsPropType = {
    leftInput: string,
    rightInput: string,
    onChange: onChangeFnType
}
export type onChangeFnType = (leftInput: string, rightInput: string) => void

export type TwoInputsType = FunctionComponent<TwoInputsPropType>