import * as React from 'react'
import {ReactComponentElement} from 'react'
import * as TestRenderer from 'react-test-renderer'
import {TwoBars, twoBarsFactory} from '../../../app/components/two-bars/two-bars';
import {Bar} from '../../../app/components/two-bars/bar';
import {BAR_CSS_CLASS} from '../../../type/components/two-bars/bar.type';
import {ColorCssClassEnum, TwoBarsType} from '../../../type/components/two-bars/two-bars.type';

describe('<TwoBars />', () => {
    const twoBarsClickHandlerMock = jest.fn().mockReturnValue('twoBarsClickHandlerMock') as jest.Mock
    const twoBarsClickHandlerMockRight = jest.fn().mockReturnValue('twoBarsClickHandlerMockRight') as jest.Mock

    it('should render <Bar />', () => {
        const divInst = TestRenderer.create(<TwoBars
            rightBar={<Bar cssClass={BAR_CSS_CLASS.LEFT_BAR} width={20} clickHandler={twoBarsClickHandlerMock}/>}
            leftBar={<Bar cssClass={BAR_CSS_CLASS.RIGHT_BAR} width={80} clickHandler={twoBarsClickHandlerMockRight}/>}
            colorClass={ColorCssClassEnum.regularColor}/>)
            .root
            .findByType('div')
        const barInstances = divInst.findAllByType(Bar);
        const leftBarInst = barInstances.filter(bar => bar.props['cssClass'] === BAR_CSS_CLASS.LEFT_BAR)[0]
        const rightBarInst = barInstances.filter(bar => bar.props['cssClass'] === BAR_CSS_CLASS.RIGHT_BAR)[0]

        expect(divInst.props['className'].includes(ColorCssClassEnum.regularColor)).toBeTruthy()
        expect(leftBarInst.props['width']).toEqual(20)
        expect(leftBarInst.props['clickHandler']()).toEqual('twoBarsClickHandlerMock')
        expect(rightBarInst.props['width']).toEqual(80)
        expect(rightBarInst.props['clickHandler']()).toEqual('twoBarsClickHandlerMockRight')

    });

    it('should render <Bar /> for bwColor', () => {
        const divInst = TestRenderer.create(<TwoBars
            rightBar={<Bar cssClass={BAR_CSS_CLASS.LEFT_BAR} width={20} clickHandler={twoBarsClickHandlerMock}/>}
            leftBar={<Bar cssClass={BAR_CSS_CLASS.RIGHT_BAR} width={80} clickHandler={twoBarsClickHandlerMock}/>}
            colorClass={ColorCssClassEnum.bwColor}/>)
            .root
            .findByType('div')

        expect(divInst.props['className'].includes(ColorCssClassEnum.bwColor)).toBeTruthy()
    });

    it('should create instance of TwoBars', () => {
        const twoBarsReactInst: ReactComponentElement<TwoBarsType> = twoBarsFactory(ColorCssClassEnum.regularColor, twoBarsClickHandlerMock)(10, 20)
        expect(twoBarsReactInst.props.colorClass).toEqual(ColorCssClassEnum.regularColor)
        expect(twoBarsReactInst.props.leftBar.props.width).toEqual(10)
        expect(twoBarsReactInst.props.rightBar.props.width).toEqual(20)
    })
});