import * as React from 'react'
import {FunctionComponent, useState} from 'react'
import {TwoValuesContainer, TwoValuesContainerPropType} from 'app/containers/two-inputs/two-values-container';
import {
    ColorSchemeIndicator,
    ColorSchemeIndicatorPropType
} from 'app/components/color-scheme-indicator/color-scheme-indicator';
import {TWO_BARS_CLICK_TYPE} from "../../redux/two-bars/two-bars";
import {Action} from 'redux'

export const enum ColorCssClassEnum {
    regularColor = 'regularColor',
    bwColor = 'bwColor'
}

export type TwoBarsPropValuesType = {
    colorClass: ColorCssClassEnum
}

export type TwoBarsContainerDispatchProps = {
    twoBarsClickHandler: (colorCssClass: ColorCssClassEnum) => Action<TWO_BARS_CLICK_TYPE>
}
export type TwoBarsContainerPropType = TwoBarsContainerStateProps & TwoBarsContainerDispatchProps
export type TwoBarsContainerStateProps = {
    colorCssClass: ColorCssClassEnum
}
export type TwoBarsContainerType = FunctionComponent<TwoBarsContainerPropType>

export const TwoBarsContainer: TwoBarsContainerType = (props) => {
    const [colorClass, setColorClass] = useState(ColorCssClassEnum.regularColor)
    const twoValuesContainerProps: TwoValuesContainerPropType = {
        colorClass: colorClass,
        clickHandler: (event) => {
            props.twoBarsClickHandler(colorClass)
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
