import * as React from 'react';
import {ColorCssClassEnum, TwoBarsFactoryType, TwoBarsType} from 'type/components/two-bars/two-bars.type';
import {Bar} from './bar';
import {BAR_CSS_CLASS} from 'type/components/two-bars/bar.type';

export const twoBarsFactory: TwoBarsFactoryType = (colorClass, clickHandler) =>
    (leftWidth, rightWidth) => {
        return (
            <TwoBars colorClass={colorClass}
                     leftBar={<Bar cssClass={BAR_CSS_CLASS.LEFT_BAR} width={leftWidth} clickHandler={clickHandler}/>}
                     rightBar={<Bar cssClass={BAR_CSS_CLASS.RIGHT_BAR} width={rightWidth}
                                    clickHandler={clickHandler}/>}/>
        )
    }

export const TwoBars: TwoBarsType = (props) => {
    return (
        <div className={`values ${props.colorClass}`}>
            {props.leftBar}
            {props.rightBar}
        </div>
    )
}
