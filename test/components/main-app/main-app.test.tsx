import * as React from 'react'
import * as TestRenderer from 'react-test-renderer';
import MainApp from 'app/components/main-app/main-app';
import {ReactTestRenderer} from 'react-test-renderer';
import {Provider} from "react-redux";
import {createMockStore} from "test/redux/main-app/main-app.data";

describe('<MainApp />', () => {

    it('should render static content with div.main-app', () => {
        const mainAppWrap: ReactTestRenderer = TestRenderer.create(
            <Provider store={createMockStore()}>
                <MainApp/>
            </Provider>)
        const mainDivWrapper = mainAppWrap.root.findByType('div')

        expect(mainDivWrapper.props.className).toEqual('main-app')
    })
})
