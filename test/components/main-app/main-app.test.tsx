import * as React from 'react'
import * as TestRenderer from 'react-test-renderer';
import MainApp from 'app/components/main-app/main-app';
import {ReactTestRenderer} from 'react-test-renderer';

describe('<MainApp />', () => {
    it('should render static content with div.main-app', () => {
        const mainAppWrap: ReactTestRenderer = TestRenderer.create(<MainApp/>)
        const mainDivWrapper = mainAppWrap.root.findByType('div')

        expect(mainDivWrapper.props.className).toEqual('main-app')
    })
})