import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'
import {Bar} from 'app/components/two-bars/bar'
import {BAR_CSS_CLASS} from 'type/components/two-bars/bar.type';

describe('<Bar />', () => {
    it('should render div with left css styling and width', () => {
        const divInst = TestRenderer.create(<Bar cssClass={BAR_CSS_CLASS.LEFT_BAR} width={20}/>)
            .root
            .findByType('div')
        const inputInst = divInst.find(el => el.props.className.includes(BAR_CSS_CLASS.LEFT_BAR))

        expect(inputInst).toBeTruthy()
        expect(inputInst.props.style.width).toEqual('20px')
    })

    it('should render div with right css styling and width', () => {
        const divInst = TestRenderer.create(<Bar cssClass={BAR_CSS_CLASS.RIGHT_BAR} width={80}/>)
            .root
            .findByType('div')
        const inputInst = divInst.find(el => el.props.className.includes(BAR_CSS_CLASS.RIGHT_BAR))

        expect(inputInst).toBeTruthy()
        expect(inputInst.props.style.width).toEqual('80px')
    })
})