import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'
import {
    ColorCssClassEnum,
    TwoBarsContainer
} from 'app/containers/two-bars/two-bars-container';
import {TwoValuesContainer} from 'app/containers/two-inputs/two-values-container';
import {MouseEventHandler, MouseEvent} from 'react';
import {ColorSchemeIndicator} from '../../../app/components/color-scheme-indicator/color-scheme-indicator';

describe('<TwoBarsContainer />', () => {

    beforeEach(() => {
    })

    it('should render <TwoValuesContainer>', () => {
        const twoBarsContainerInst = TestRenderer.create(<TwoBarsContainer/>).root
        const twoValuesContainerInst = twoBarsContainerInst.findByType(TwoValuesContainer)

        expect(twoValuesContainerInst).toBeTruthy()
        expect(twoValuesContainerInst.props['colorClass']).toEqual(ColorCssClassEnum.regularColor)
    })

    it('should change color class back', () => {
        const twoBarsContainerInst = TestRenderer.create(<TwoBarsContainer/>).root
        const twoValuesContainerEl = twoBarsContainerInst.findByType(TwoValuesContainer)
        const event = {} as MouseEvent<HTMLDivElement>

        const clickHandler: MouseEventHandler<HTMLDivElement> = twoValuesContainerEl.props['clickHandler']
        expect(twoValuesContainerEl.props['colorClass']).toEqual(ColorCssClassEnum.regularColor)

        TestRenderer.act(() => {
            clickHandler(event)
        })
        expect(twoValuesContainerEl.props['colorClass']).toEqual(ColorCssClassEnum.bwColor)

        const clickHandler2: MouseEventHandler<HTMLDivElement> = twoValuesContainerEl.props['clickHandler']
        TestRenderer.act(() => {
            clickHandler2(event)
        })
        expect(twoValuesContainerEl.props['colorClass']).toEqual(ColorCssClassEnum.regularColor)
    })

    it('should render ColorSchemeIndicator', () => {
        const twoBarsContainerEl = TestRenderer.create(<TwoBarsContainer/>).root
        const colorSchemaIndicator = twoBarsContainerEl.findByType(ColorSchemeIndicator)
        const colorClass: ColorCssClassEnum = colorSchemaIndicator.props['colorClass']

        expect(colorSchemaIndicator.props['colorClass']).toEqual(ColorCssClassEnum.regularColor)
    })

})