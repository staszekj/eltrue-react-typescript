import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'
import {TwoBars} from '../../../app/components/two-bars/two-bars';
import {Bar} from '../../../app/components/two-bars/bar';
import {BAR_CSS_CLASS, BarType} from '../../../type/components/two-bars/bar.type';
import {ColorCssClassEnum} from '../../../type/components/two-bars/two-bars.type';

describe('<TwoBars />', () => {
    it('should render <Bar />', () => {
        const divInst = TestRenderer.create(<TwoBars
            rightBar={<Bar cssClass={BAR_CSS_CLASS.LEFT_BAR} width={20}/>}
            leftBar={<Bar cssClass={BAR_CSS_CLASS.RIGHT_BAR} width={80}/>}
            colorClass={ColorCssClassEnum.regularColor}/>)
            .root
            .findByType('div')
        const barInstances = divInst.findAllByType(Bar);
        const leftBarInst = barInstances.filter(bar => bar.props['cssClass'] === BAR_CSS_CLASS.LEFT_BAR)[0]
        const rightBarInst = barInstances.filter(bar => bar.props['cssClass'] === BAR_CSS_CLASS.RIGHT_BAR)[0]

        expect(divInst.props['className'].includes(ColorCssClassEnum.regularColor)).toBeTruthy()
        expect(leftBarInst.props['width']).toEqual(20)
        expect(rightBarInst.props['width']).toEqual(80)

    });

    it('should render <Bar /> for bwColor', () => {
        const divInst = TestRenderer.create(<TwoBars
            rightBar={<Bar cssClass={BAR_CSS_CLASS.LEFT_BAR} width={20}/>}
            leftBar={<Bar cssClass={BAR_CSS_CLASS.RIGHT_BAR} width={80}/>}
            colorClass={ColorCssClassEnum.bwColor}/>)
            .root
            .findByType('div')

        expect(divInst.props['className'].includes(ColorCssClassEnum.bwColor)).toBeTruthy()
    });
});