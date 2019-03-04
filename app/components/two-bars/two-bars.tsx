import * as React from 'react';
import {TwoBarsType} from 'type/components/two-bars/two-bars.type';

export const TwoBars: TwoBarsType = (props) => {
    return (
        <div className={`values ${props.colorClass}`}>
            {props.leftBar}
            {props.rightBar}
        </div>
    )
}
