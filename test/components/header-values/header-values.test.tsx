import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'
import {format, HeaderValues} from '../../../app/components/header-values/header-values';
import {ColorCssClassEnum} from 'app/containers/two-bars/two-bars-container';

describe('<Header Values />', () => {
    it('should render values', () => {
        const HeaderValuesInst = TestRenderer.create(<HeaderValues leftValue={10} rightValue={20} result={30}
                                                                   colorClass={ColorCssClassEnum.regularColor}/>).root
        const divHeaderInst = HeaderValuesInst.findByType('div')
        const spanValue1 = divHeaderInst.find((it) => (it.type === 'span' && it.props.className.includes('header-value-1')))
        const spanValue2 = divHeaderInst.find((it) => (it.type === 'span' && it.props.className.includes('header-value-2')))
        const spanValueResult = divHeaderInst.find((it) => (it.type === 'span' && it.props.className.includes('header-value-result')))

        expect(spanValue1.children[0]).toBe('10')
        expect(spanValue2.children[0]).toBe('20')
        expect(spanValueResult.children[0]).toBe('30')
    })

    it('should render colorClass', () => {
        const HeaderValuesInst = TestRenderer.create(<HeaderValues leftValue={10} rightValue={20} result={30}
                                                                   colorClass={ColorCssClassEnum.bwColor}/>).root
        const divHeaderInst = HeaderValuesInst.findByType('div')
        const divColorClassInst = divHeaderInst.findByProps({className: ColorCssClassEnum.bwColor})

        expect(divColorClassInst).toBeTruthy()
    })

    it('should format regular number', () => {
        const value = format(0)
        expect(value).toBe('0')
    })

    it('should format null value', () => {
        const value = format(null)
        expect(value).toBe('_')
    })
})