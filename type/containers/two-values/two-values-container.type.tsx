import * as React from 'react';
import {FunctionComponent} from 'react';
import {TwoInputsValuesType} from 'app/components/two-inputs/two-inputs';
import {TwoBarsFactoryType} from 'type/components/two-bars/two-bars.type';
import {HeaderValuesFactoryFnType} from '../../../app/components/header-values/header-values';

export type TwoValuesContainerStateType = TwoInputsValuesType
export type TwoValuesContainerPropType = {
    twoBarsFactoryFn: ReturnType<TwoBarsFactoryType>,
    headerValuesFactoryFn: ReturnType<HeaderValuesFactoryFnType>
}
export type TwoValuesContainerType = FunctionComponent<TwoValuesContainerPropType>

export type ParseFnType = (value: string) => number | null
export type ValidateFnType = (value: string) => boolean
