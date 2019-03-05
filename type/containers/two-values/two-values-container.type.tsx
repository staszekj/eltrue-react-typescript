import * as React from 'react';
import {FunctionComponent} from 'react';
import {TwoInputsValuesType} from 'type/components/two-inputs/two-inputs.type';
import {TwoBarsFactoryType} from 'type/components/two-bars/two-bars.type';

export type TwoValuesContainerStateType = TwoInputsValuesType
export type TwoValuesContainerPropType = {
    twoBarsFactoryFn: ReturnType<TwoBarsFactoryType>
}
export type TwoValuesContainerType = FunctionComponent<TwoValuesContainerPropType>

export type ParseFnType = (value: string) => number | null
export type ValidateFnType = (value: string) => boolean
