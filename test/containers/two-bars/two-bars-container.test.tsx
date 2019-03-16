import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'
import {
    ColorCssClassEnum,
    TwoBarsContainer,
    TwoBarsContainerOutputType
} from 'app/containers/two-bars/two-bars-container';
import {TwoValuesContainer} from 'app/containers/two-inputs/two-values-container';
import {MouseEventHandler, MouseEvent} from 'react';

describe('<TwoBarsContainer />', () => {

    beforeEach(() => {
    })

    it('should render <TwoValuesContainer>', () => {
        const twoBarsContainerInst = TestRenderer.create(<TwoBarsContainer/>).root
        const twoValuesContainerInst = twoBarsContainerInst.findByType(TwoValuesContainer)
        const twoBarsContainerOutput: TwoBarsContainerOutputType = twoValuesContainerInst.props['twoBarsContainerOutput']

        expect(twoValuesContainerInst).toBeTruthy()
        expect(twoBarsContainerOutput.colorClass).toEqual(ColorCssClassEnum.regularColor)
    })

    it('should change color class', () => {
        const twoBarsContainerInst = TestRenderer.create(<TwoBarsContainer/>).root
        const twoValuesContainerEl = twoBarsContainerInst.findByType(TwoValuesContainer)
        const twoBarsContainerOutput: TwoBarsContainerOutputType = twoValuesContainerEl.props['twoBarsContainerOutput']
        const clickHandler: MouseEventHandler<HTMLDivElement> = twoBarsContainerOutput.clickHandler
        const event = {} as MouseEvent<HTMLDivElement>

        expect(twoBarsContainerOutput.colorClass).toEqual(ColorCssClassEnum.regularColor)
        TestRenderer.act(() => {
            clickHandler(event)
        })
    })

})