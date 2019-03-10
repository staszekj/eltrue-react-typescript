import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'
import {TwoBarsContainer} from 'app/containers/two-bars/two-bars-container';
import {TwoValuesContainer} from 'app/containers/two-inputs/two-values-container';
import {twoBarsFactory} from 'app/components/two-bars/two-bars';
import {ColorCssClassEnum} from 'type/components/two-bars/two-bars.type';

jest.mock('app/components/two-bars/two-bars')
const twoBarsFactoryMock = twoBarsFactory as jest.Mock;

describe('<TwoValuesContainer />', () => {

    beforeEach(() => {
        twoBarsFactoryMock.mockReset()

        twoBarsFactoryMock.mockImplementation((colorClass, handler) => {
            if (colorClass === ColorCssClassEnum.regularColor) {
                return jest.fn().mockReturnValue(ColorCssClassEnum.regularColor)
            }
            if (colorClass === ColorCssClassEnum.bwColor) {
                return jest.fn().mockReturnValue(ColorCssClassEnum.bwColor)
            }
            return null
        })
    })

    it('should render <TwoValuesContainer>', () => {
        const twoBarsContainerInst = TestRenderer.create(<TwoBarsContainer/>).root
        const twoValuesContainerInst = twoBarsContainerInst.findByType(TwoValuesContainer)
        const twoBarsFactoryFn = twoValuesContainerInst.props['twoBarsFactoryFn']
        const handler = twoBarsFactoryMock.mock.calls[0][1]

        expect(twoValuesContainerInst).toBeTruthy()
        expect(twoBarsFactoryMock).toHaveBeenCalledWith(ColorCssClassEnum.regularColor, handler)
    })

    it('should change color class', () => {
        const twoBarsContainerInst = TestRenderer.create(<TwoBarsContainer/>).root
        const twoValuesContainerInst = twoBarsContainerInst.findByType(TwoValuesContainer)
        TestRenderer.act(() => {
            const handler = twoBarsFactoryMock.mock.calls[0][1]
            handler()
        })
        const twoBarsFactoryFn = twoValuesContainerInst.props['twoBarsFactoryFn']
        expect(twoBarsFactoryFn()).toEqual(ColorCssClassEnum.bwColor)
    })

    it('should change color class back', () => {
        const twoBarsContainerInst = TestRenderer.create(<TwoBarsContainer/>).root
        const twoValuesContainerInst = twoBarsContainerInst.findByType(TwoValuesContainer)
        const twoBarsFactoryFn = twoValuesContainerInst.props['twoBarsFactoryFn']
        TestRenderer.act(() => {
            const handler = twoBarsFactoryMock.mock.calls[0][1]
            handler()
        })
        TestRenderer.act(() => {
            const handler = twoBarsFactoryMock.mock.calls[1][1]
            handler()
        })
        expect(twoBarsFactoryFn()).toEqual(ColorCssClassEnum.regularColor)
    })
})