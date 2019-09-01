import * as React from 'react'
import {FunctionComponent, useEffect, useState, useRef} from 'react'
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
    const elRef = useRef<HTMLDivElement>(null)
    const [divWith, setDivWith] = useState<number | null>(null)
    console.log("TwoBarsContainer is called with divWith:", divWith)
    useEffect(() => {
        const offsetWith = elRef.current && elRef.current.offsetWidth;
        setDivWith(offsetWith)
        // return () => {
        //     console.log("SJA: component is unmounting")
        // }
    }, [divWith])


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
        <div ref={elRef}>
            <TwoValuesContainer {...twoValuesContainerProps}/>
            <ColorSchemeIndicator {...colorSchemeIndicatorProps}/>
            <b>Element width is: {divWith} px</b>
        </div>
    )
}
