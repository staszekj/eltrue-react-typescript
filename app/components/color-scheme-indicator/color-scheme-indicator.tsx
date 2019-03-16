import * as React from 'react'
import {FunctionComponent, ReactComponentElement} from 'react';
import {ColorCssClassEnum} from '../../containers/two-bars/two-bars-container';

export type ColorSchemeIndicatorPropType = {
    colorClass: ColorCssClassEnum
}

export const ColorSchemeIndicator: FunctionComponent<ColorSchemeIndicatorPropType> = (props) => {
    const {colorClass} = props
    const elements = new Map<ColorCssClassEnum, ReactComponentElement<'span'>>();
    elements.set(ColorCssClassEnum.bwColor, <span className="indicator black-white-indicator">Black and white</span>)
    elements.set(ColorCssClassEnum.regularColor, <span className="indicator regular-indicator">Regular schema</span>)

    return (
        <div className="color-scheme-indicator">
            Selected color scheme: {elements.get(colorClass)}
        </div>
    )
}