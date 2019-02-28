import * as React from 'react'
import * as TestRenderer from 'react-test-renderer';
import {TwoValuesContainer, validate} from 'app/containers/two-values-container';
import {parse} from 'app/containers/two-values-parser';
import {TwoInputs} from 'app/components/two-inputs/two-inputs';
import {onChangeFnType} from 'type/components/two-inputs/two-inputs.type';
import {ReactTestInstance} from 'react-test-renderer';
import {ParseFnType} from '../../../type/containers/two-values/two-values-container.type';

jest.mock('app/containers/two-values-parser')

const parseMock = parse as jest.Mock

describe('<TwoValuesContainer />', () => {

    let twoValuesContainerInst: ReactTestInstance;

    beforeEach(() => {
        parseMock.mockReset()

        twoValuesContainerInst = TestRenderer.create(<TwoValuesContainer
            leftInput={'20'}
            rightInput={''}/>).root
    })

    it('should display initial values', () => {

        const twoInputsInst = twoValuesContainerInst.findByType(TwoInputs)

        expect(twoInputsInst.props['leftInput']).toEqual('20')
        expect(twoInputsInst.props['rightInput']).toEqual('')
    })

    it('should handle onChange', () => {

        const twoInputsInst = twoValuesContainerInst.findByType(TwoInputs)
        const onChangeFn: onChangeFnType = twoInputsInst.props['onChange']

        TestRenderer.act(() => {
            onChangeFn('50', '80')
        })

        expect(twoInputsInst.props['leftInput']).toEqual('50')
        expect(twoInputsInst.props['rightInput']).toEqual('80')
    })

    it('should handle onChange with empty values', () => {

        const twoInputsInst = twoValuesContainerInst.findByType(TwoInputs)
        const onChangeFn: onChangeFnType = twoInputsInst.props['onChange']

        TestRenderer.act(() => {
            onChangeFn('', '')
        })

        expect(twoInputsInst.props['leftInput']).toEqual('')
        expect(twoInputsInst.props['rightInput']).toEqual('')
    })

    it('should return false is parse fn return null', () => {
        parseMock.mockReturnValue(null)
        const validationResult = validate('abc')

        expect(parseMock).toHaveBeenCalledWith('abc')
        expect(validationResult).toBeFalsy()
    })

    it('should return true is parse fn return not null', () => {
        parseMock.mockReturnValue(123)
        const validationResult = validate('123')

        expect(parseMock).toHaveBeenCalledWith('123')
        expect(validationResult).toBeTruthy()
    })


})
