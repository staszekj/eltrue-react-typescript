import * as React from 'react'
import * as ReactRenderer from 'react-test-renderer'
import {ColorSchemeIndicator} from '../../../app/components/color-scheme-indicator/color-scheme-indicator';
import {ColorCssClassEnum} from '../../../app/containers/two-bars/two-bars-container';

describe('color scheme indicator', () => {
    it('should display indicators', () => {
        const colorSchemeIndicatorEl = ReactRenderer.create(<ColorSchemeIndicator
            colorClass={ColorCssClassEnum.regularColor}/>).root
        const span = colorSchemeIndicatorEl.findByType('span')

        expect(span.props['className']).toEqual('indicator regularColor')
    })

    it('should display indicators for black and white', () => {
        const colorSchemeIndicatorEl = ReactRenderer.create(<ColorSchemeIndicator
            colorClass={ColorCssClassEnum.bwColor}/>).root
        const span = colorSchemeIndicatorEl.findByType('span')

        expect(span.props['className']).toEqual('indicator bwColor')
    })
})