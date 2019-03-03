import * as React from 'react'
import {BarType} from 'type/components/two-bars/bar.type';

export const Bar: BarType = (props) => {

    const width = `${props.width}px`
    return (
        <div className={`value-container ${props.cssClass}`} style={{width: width}}><span className="text">60</span>
        </div>
    )
}