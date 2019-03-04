import * as React from 'react'
import {FunctionComponent, ReactComponentElement, ReactElement} from 'react';
import {BarType} from './bar.type';

export const enum ColorCssClassEnum {
    regularColor = 'regularColor',
    bwColor = 'bwColor'
}

export type TwoBarsPropType = {
    leftBar: ReactComponentElement<BarType>,
    rightBar: ReactComponentElement<BarType>
    colorClass: ColorCssClassEnum
}
export type TwoBarsType = FunctionComponent<TwoBarsPropType>