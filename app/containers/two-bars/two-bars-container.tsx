import * as React from 'react'
import {MouseEventHandler, useState} from 'react'
import {TwoBarsContainerType} from 'type/containers/two-bars/two-bars-container.type';
import {ColorCssClassEnum} from 'type/components/two-bars/two-bars.type';
import {TwoValuesContainer} from 'app/containers/two-inputs/two-values-container';
import {twoBarsFactory} from 'app/components/two-bars/two-bars';
import {headerValuesFactory} from 'app/components/header-values/header-values';

export const TwoBarsContainer: TwoBarsContainerType = (props) => {
    const [colorClass, setColorClass] = useState(ColorCssClassEnum.regularColor)
    const handler: MouseEventHandler<HTMLDivElement> = (event) => {
        if (colorClass === ColorCssClassEnum.regularColor) {
            setColorClass(ColorCssClassEnum.bwColor)
        } else {
            setColorClass(ColorCssClassEnum.regularColor)
        }
    }

    const twoBarsFct = twoBarsFactory(colorClass, handler)
    const headerValuesFactoryFn = headerValuesFactory(colorClass)

    return (
        <TwoValuesContainer twoBarsFactoryFn={twoBarsFct} headerValuesFactoryFn={headerValuesFactoryFn}/>
    )
}