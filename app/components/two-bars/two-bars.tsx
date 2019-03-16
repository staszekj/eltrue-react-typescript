import * as React from 'react';
import {Bar} from './bar';
import {BarType} from 'type/components/two-bars/bar.type';
import {MouseEventHandler} from 'react';
import {ReactComponentElement} from 'react';
import {FunctionComponent} from 'react';
import {TwoBarsContainerOutputType, TwoBarsPropValuesType} from '../../containers/two-bars/two-bars-container';

export type TwoBarsPropType = TwoBarsPropValuesType & {
    leftBar: ReactComponentElement<BarType>,
    rightBar: ReactComponentElement<BarType>
}

export const TwoBars: FunctionComponent<TwoBarsPropType> = (props) => {
    return (
        <div className={`values ${props.colorClass}`}>
            {props.leftBar}
            {props.rightBar}
        </div>
    )
}
