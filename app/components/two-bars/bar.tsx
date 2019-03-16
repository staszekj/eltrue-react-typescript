import * as React from 'react';
import {FunctionComponent} from 'react';
import {BAR_CSS_CLASS} from '../../containers/two-inputs/two-values-container';
import {MouseEventHandler} from 'react';

export type BarClickHandlerType = MouseEventHandler<HTMLDivElement>
export type BarPropType = {
    cssClass: BAR_CSS_CLASS,
    width: number,
    clickHandler: BarClickHandlerType
}
export type BarType = FunctionComponent<BarPropType>

export const Bar: BarType = (props) => {

    const width = props.width
    const widthPx = `${props.width}px`
    return (
        <div className={`value-container ${props.cssClass}`}
             style={{width: widthPx}}
             onClick={props.clickHandler}>
            <span className="text">{width}</span>
        </div>
    )
}