import * as React from 'react';
import {FunctionComponent, MouseEventHandler} from 'react';
import {BAR_CSS_CLASS} from 'app/containers/two-inputs/two-values-container';

export type BarClickHandlerType = MouseEventHandler<HTMLDivElement>

export type BarValuesType = {
    cssClass: BAR_CSS_CLASS,
    width: number,
    clickHandler: BarClickHandlerType
}

export type BarPropType = BarValuesType


export type BarType = FunctionComponent<BarPropType>