import * as React from 'react';
import {FunctionComponent, MouseEventHandler} from 'react';

export const enum BAR_CSS_CLASS {
    LEFT_BAR = 'value1',
    RIGHT_BAR = 'value2'
}

export type BarClickHandlerType = MouseEventHandler<HTMLDivElement>

export type BarValuesType = {
    cssClass: BAR_CSS_CLASS,
    width: number,
    clickHandler: BarClickHandlerType
}

export type BarPropType = BarValuesType


export type BarType = FunctionComponent<BarPropType>