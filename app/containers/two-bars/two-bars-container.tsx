import * as React from 'react'
import {FunctionComponent, MouseEventHandler, useState} from 'react'
import {TwoValuesContainer} from 'app/containers/two-inputs/two-values-container';
import {headerValuesFactory} from 'app/components/header-values/header-values';

export const enum ColorCssClassEnum {
    regularColor = 'regularColor',
    bwColor = 'bwColor'
}

export type TwoBarsPropValuesType = {
    colorClass: ColorCssClassEnum
}

export type TwoBarsContainerOutputType = TwoBarsPropValuesType & {
    clickHandler: MouseEventHandler<HTMLDivElement>
}

export type TwoBarsContainerType = FunctionComponent<{}>


export const TwoBarsContainer: TwoBarsContainerType = (props) => {
    const [colorClass, setColorClass] = useState(ColorCssClassEnum.regularColor)
    const twoBarsProp: TwoBarsContainerOutputType = {
        colorClass: colorClass,
        clickHandler: (event) => {
            if (colorClass === ColorCssClassEnum.regularColor) {
                setColorClass(ColorCssClassEnum.bwColor)
            } else {
                setColorClass(ColorCssClassEnum.regularColor)
            }
        }
    }

    const headerValuesFactoryFn = headerValuesFactory(colorClass)

    return (
        <TwoValuesContainer twoBarsContainerOutput={twoBarsProp} headerValuesFactoryFn={headerValuesFactoryFn}/>
    )
}