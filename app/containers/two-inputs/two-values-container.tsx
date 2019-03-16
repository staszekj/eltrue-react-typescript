import * as React from 'react'
import {FunctionComponent, MouseEventHandler, useState} from 'react'
import {TwoInputs} from 'app/components/two-inputs/two-inputs';
import {getAsNumber, parse, sumUpInputValues} from 'app/containers/two-inputs/two-values-parser';
import {HeaderValuesFactoryFnType} from 'app/components/header-values/header-values';
import {TwoBars} from 'app/components/two-bars/two-bars';
import {TwoBarsContainerOutputType} from '../two-bars/two-bars-container';
import {Bar} from '../../components/two-bars/bar';
import {BarPropType} from '../../../type/components/two-bars/bar.type';

export const enum BAR_CSS_CLASS {
    LEFT_BAR = 'value1',
    RIGHT_BAR = 'value2'
}

// types

export type TwoInputsValuesType = {
    leftInput: string,
    rightInput: string,
}

export type TwoInputsPropType = TwoInputsValuesType & {
    onChange: onChangeFnType,
}
export type TwoValuesContainerStateType = TwoInputsValuesType

export type TwoValuesContainerPropType = {
    twoBarsContainerOutput: TwoBarsContainerOutputType,
    headerValuesFactoryFn: ReturnType<HeaderValuesFactoryFnType>
}

export type onChangeFnType = (leftInput: string, rightInput: string) => void

export type BarClickHandlerType = MouseEventHandler<HTMLDivElement>

export type BarValuesType = {
    cssClass: BAR_CSS_CLASS,
    width: number,
    clickHandler: BarClickHandlerType
}

// implementation

export const TwoValuesContainer: FunctionComponent<TwoValuesContainerPropType> = (props) => {
    const {twoBarsContainerOutput} = props
    const [inputValues, setInputValues] = useState<TwoValuesContainerStateType>({
        leftInput: '10',
        rightInput: '20'
    })

    const twoBarsProps: TwoBarsContainerOutputType = {
        ...twoBarsContainerOutput
    }

    const leftBarProps: BarPropType = {
        ...twoBarsContainerOutput,
        cssClass: BAR_CSS_CLASS.LEFT_BAR,
        width: getAsNumber(parse(inputValues.leftInput))
    }

    const rightBarProps: BarPropType = {
        ...twoBarsProps,
        cssClass: BAR_CSS_CLASS.RIGHT_BAR,
        width: getAsNumber(parse(inputValues.rightInput))
    }

    const twoInputProps: TwoInputsPropType = {
        leftInput: inputValues.leftInput,
        rightInput: inputValues.rightInput,
        onChange: (leftInput, rightInput) => {
            setInputValues({
                leftInput,
                rightInput
            })
        }
    }

    return (
        <div>
            {props.headerValuesFactoryFn(parse(inputValues.leftInput), parse(inputValues.rightInput), sumUpInputValues(inputValues))}
            <div className="main">
                <div className="left-panel">
                    <TwoBars {...twoBarsProps}
                             leftBar={<Bar {...leftBarProps}/>}
                             rightBar={<Bar {...rightBarProps}/>}
                    />
                </div>
                <div className={'right-panel background-color-green'}>
                    <TwoInputs {...twoInputProps}/>
                </div>
            </div>
        </div>
    )
}