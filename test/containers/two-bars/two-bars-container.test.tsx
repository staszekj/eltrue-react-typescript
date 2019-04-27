import * as React from 'react'
import {MouseEvent, MouseEventHandler} from 'react'
import * as TestRenderer from 'react-test-renderer'
import {
    ColorCssClassEnum,
    TwoBarsContainer, TwoBarsContainerDispatchProps, TwoBarsContainerPropType,
    TwoBarsContainerStateProps
} from 'app/containers/two-bars/two-bars-container';
import {TwoValuesContainer} from 'app/containers/two-inputs/two-values-container';
import {ColorSchemeIndicator} from '../../../app/components/color-scheme-indicator/color-scheme-indicator';

describe('<TwoBarsContainer />', () => {

    const twoBarsContainerStateProps: TwoBarsContainerStateProps = {
        colorCssClass: ColorCssClassEnum.regularColor
    }

    const twoBarsContainerDispatchProps: TwoBarsContainerDispatchProps = {
        twoBarsClickHandler: jest.fn()
    }

    const twoBarsContainerProps: TwoBarsContainerPropType = {
        ...twoBarsContainerStateProps,
        ...twoBarsContainerDispatchProps
    }

    beforeEach(() => {
    })

    it('should render <TwoValuesContainer>', () => {
        const twoBarsContainerInst = TestRenderer.create(<TwoBarsContainer {...twoBarsContainerProps}/>).root
        const twoValuesContainerInst = twoBarsContainerInst.findByType(TwoValuesContainer)

        expect(twoValuesContainerInst).toBeTruthy()
        expect(twoValuesContainerInst.props['colorClass']).toEqual(ColorCssClassEnum.regularColor)
    })

    it('should change color class back', () => {
        const twoBarsContainerInst = TestRenderer.create(<TwoBarsContainer {...twoBarsContainerProps}/>).root
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
        const twoBarsContainerEl = TestRenderer.create(<TwoBarsContainer  {...twoBarsContainerProps}/>).root
        const colorSchemaIndicator = twoBarsContainerEl.findByType(ColorSchemeIndicator)
        const colorClass: ColorCssClassEnum = colorSchemaIndicator.props['colorClass']

        expect(colorSchemaIndicator.props['colorClass']).toEqual(ColorCssClassEnum.regularColor)
    })

})
