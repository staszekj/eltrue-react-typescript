import * as React from 'react'
import {FunctionComponent, MouseEventHandler, ReactComponentElement, ReactElement} from 'react';
import {BarType} from './bar.type';

export const enum ColorCssClassEnum {
    regularColor = 'regularColor',
    bwColor = 'bwColor'
}

export type TwoBarsFactoryType = (colorClass: ColorCssClassEnum, clickHander: MouseEventHandler<HTMLDivElement>) =>
    (leftWidth: number, rightWidth: number) => ReactComponentElement<TwoBarsType>

export type TwoBarsPropType = {
    leftBar: ReactComponentElement<BarType>,
    rightBar: ReactComponentElement<BarType>
    colorClass: ColorCssClassEnum
}
export type TwoBarsType = FunctionComponent<TwoBarsPropType>