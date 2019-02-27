import * as React from 'react';
import {ReactComponentElement} from 'react';

export type TwoInputsPropType = {
    leftInput: string,
    rightInput: string,
    onChange: onChangeFnType
}
export type onChangeFnType = (leftInput: string | null, rightInput: string | null) => undefined

export type TwoInputsType = (prop: TwoInputsPropType) => ReactComponentElement<'div'>