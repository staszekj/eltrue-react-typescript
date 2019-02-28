import * as React from 'react'
import * as TestRenderer from 'react-test-renderer';
import {TwoValuesContainer} from 'app/containers/two-values-container';
import {TwoInputs} from 'app/components/two-inputs/two-inputs';
import {onChangeFnType} from 'type/components/two-inputs/two-inputs.type';

describe('<TwoValuesContainer />', () => {


    beforeEach(() => {
    })

    it('should display initial values', () => {

        const twoValuesContainerInst = TestRenderer.create(<TwoValuesContainer/>).root
        const twoInputsInst = twoValuesContainerInst.findByType(TwoInputs)

        expect(twoInputsInst.props['leftInput']).toEqual('20')
        expect(twoInputsInst.props['rightInput']).toEqual('')
    })

    it('should handle onChange', () => {

        const twoValuesContainerInst = TestRenderer.create(<TwoValuesContainer/>).root
        const twoInputsInst = twoValuesContainerInst.findByType(TwoInputs)
        const onChangeFn: onChangeFnType = twoInputsInst.props['onChange']

        TestRenderer.act(() => {
            onChangeFn('50', '80')
        })

        expect(twoInputsInst.props['leftInput']).toEqual('50')
        expect(twoInputsInst.props['rightInput']).toEqual('80')
    })

    it('should handle onChange with empty values', () => {

        const twoValuesContainerInst = TestRenderer.create(<TwoValuesContainer/>).root
        const twoInputsInst = twoValuesContainerInst.findByType(TwoInputs)
        const onChangeFn: onChangeFnType = twoInputsInst.props['onChange']

        TestRenderer.act(() => {
            onChangeFn('', '')
        })

        expect(twoInputsInst.props['leftInput']).toEqual('')
        expect(twoInputsInst.props['rightInput']).toEqual('')
    })


})
