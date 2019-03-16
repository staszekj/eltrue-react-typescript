import * as React from 'react'
import {FunctionComponent, MouseEventHandler, useState} from 'react'
import {TwoValuesContainer, TwoValuesContainerPropType} from 'app/containers/two-inputs/two-values-container';
import {
    ColorSchemeIndicator,
    ColorSchemeIndicatorPropType
} from 'app/components/color-scheme-indicator/color-scheme-indicator';

export const enum ColorCssClassEnum {
    regularColor = 'regularColor',
    bwColor = 'bwColor'
}

export type TwoBarsPropValuesType = {
    colorClass: ColorCssClassEnum
}


export type TwoBarsContainerType = FunctionComponent<{}>


export const TwoBarsContainer: TwoBarsContainerType = (props) => {
    const [colorClass, setColorClass] = useState(ColorCssClassEnum.regularColor)
    const twoValuesContainerProps: TwoValuesContainerPropType = {
        colorClass: colorClass,
        clickHandler: (event) => {
            if (colorClass === ColorCssClassEnum.regularColor) {
                setColorClass(ColorCssClassEnum.bwColor)
            } else {
                setColorClass(ColorCssClassEnum.regularColor)
            }
        }
    }

    const colorSchemeIndicatorProps: ColorSchemeIndicatorPropType = {
        colorClass: colorClass
    }

    return (
        <div>
            <TwoValuesContainer {...twoValuesContainerProps}/>
            <ColorSchemeIndicator {...colorSchemeIndicatorProps}/>
        </div>
    )
}