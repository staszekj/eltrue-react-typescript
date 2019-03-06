import * as React from 'react'
import {BarType} from 'type/components/two-bars/bar.type';

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