import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'
import {Bar} from 'app/components/two-bars/bar'
import {BAR_CSS_CLASS} from 'type/components/two-bars/bar.type';

describe('<Bar />', () => {
    it('should render div with left css styling and width', () => {
        const divInst = TestRenderer.create(<Bar cssClass={BAR_CSS_CLASS.LEFT_BAR} width={20}/>)
            .root
            .findByType('div')
        const divValueInst = divInst.find(el => el.props.className.includes(BAR_CSS_CLASS.LEFT_BAR))
        const spanInst = divValueInst.findByType('span')

        expect(divValueInst).toBeTruthy()
        expect(divValueInst.props.style.width).toEqual('20px')
        expect(spanInst.children.join('')).toEqual('20')
    })

    it('should render div with right css styling and width', () => {
        const divInst = TestRenderer.create(<Bar cssClass={BAR_CSS_CLASS.RIGHT_BAR} width={80}/>)
            .root
            .findByType('div')
        const divValueInst = divInst.find(el => el.props.className.includes(BAR_CSS_CLASS.RIGHT_BAR))
        const spanInst = divValueInst.findByType('span')

        expect(divValueInst).toBeTruthy()
        expect(divValueInst.props.style.width).toEqual('80px')
        expect(spanInst.children.join('')).toEqual('80')
    })
})