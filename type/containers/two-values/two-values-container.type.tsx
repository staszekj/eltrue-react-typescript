import * as React from 'react';
import {FunctionComponent} from 'react';
import {TwoInputsValuesType} from 'type/components/two-inputs/two-inputs.type';

export type TwoValuesContainerStateType = TwoInputsValuesType
export type TwoValuesContainerType = FunctionComponent<TwoValuesContainerStateType>

export type ParseFnType = (value: string) => number | null
export type ValidateFnType = (value: string) => boolean
