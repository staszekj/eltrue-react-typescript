import * as React from 'react';
import {BarType} from './bar';
import {ReactElement} from 'react';
import {FunctionComponent} from 'react';
import {TwoBarsPropValuesType} from 'app/containers/two-bars/two-bars-container';

export type TwoBarsPropType = TwoBarsPropValuesType & {
    leftBar: ReactElement<BarType>,
    rightBar: ReactElement<BarType>
}

export const TwoBars: FunctionComponent<TwoBarsPropType> = (props) => {
    return (
        <div className={`values ${props.colorClass}`}>
            {props.leftBar}
            {props.rightBar}
        </div>
    )
}
