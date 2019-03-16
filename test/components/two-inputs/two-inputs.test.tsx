import * as React from 'react'
import * as TestRenderer from 'react-test-renderer';
import {ReactTestInstance, ReactTestRenderer} from 'react-test-renderer';
import {TwoInputs} from 'app/components/two-inputs/two-inputs';
import {expand} from 'rxjs/operators';
import {ChangeEvent} from 'react';
import {validate} from 'app/containers/two-inputs/two-values-parser';

jest.mock('app/containers/two-inputs/two-values-parser')

const validateMock = validate as jest.Mock

describe('<TwoInputs />', () => {

    const changeEvent = {
        target: {
            value: '123'
        },
    } as ChangeEvent<HTMLInputElement>

    const onChangeStubFn = jest.fn((a: string, b: string) => undefined)

    beforeEach(() => {
        onChangeStubFn.mockReset()

        validateMock.mockReset()
        validateMock.mockReturnValue(true)
    })

    it('should render two inputs element with value and className properties', () => {

        const twoInputsWrap: ReactTestInstance = TestRenderer.create(<TwoInputs leftInput={'10'}
                                                                                rightInput={'20'}
                                                                                onChange={onChangeStubFn}/>).root
        const leftInputInst = twoInputsWrap.find(el => el.type === 'input' && el.props['className'] === 'input1')
        const rightInputWrap = twoInputsWrap.find(el => el.type === 'input' && el.props['className'] === 'input2')

        expect(leftInputInst.props['value']).toEqual('10')
        expect(rightInputWrap.props['value']).toEqual('20')
    })

    it('should call onChange function for leftInput onChange', () => {
        const twoInputsInst: ReactTestInstance = TestRenderer.create(<TwoInputs leftInput={'10'}
                                                                                rightInput={'20'}
                                                                                onChange={onChangeStubFn}/>).root
        const leftInputInst = twoInputsInst.find(el => el.type === 'input' && el.props['className'] === 'input1')
        const leftInputOnChange = leftInputInst.props['onChange']

        leftInputOnChange(changeEvent)

        expect(onChangeStubFn).toBeCalledWith('123', '20')
    })

    it('should call onChange function for rightInput onChange', () => {
        const twoInputsInst: ReactTestInstance = TestRenderer.create(<TwoInputs leftInput={'10'}
                                                                                rightInput={'20'}
                                                                                onChange={onChangeStubFn}/>).root
        const rightInputInst = twoInputsInst.find(el => el.type === 'input' && el.props['className'] === 'input2')
        const rightInputOnChange = rightInputInst.props['onChange']

        rightInputOnChange(changeEvent)

        expect(onChangeStubFn).toBeCalledWith('10', '123')
    })

    it('should render error className', () => {

        validateMock.mockReturnValue(false)

        const twoInputsInst: ReactTestInstance = TestRenderer.create(<TwoInputs leftInput={'-10'}
                                                                                rightInput={'-20'}
                                                                                onChange={onChangeStubFn}/>).root
        const leftInputInst = twoInputsInst.find(el => el.type === 'input' && el.props['className'].includes('input1'))
        const rightInputWrap = twoInputsInst.find(el => el.type === 'input' && el.props['className'].includes('input2'))

        expect(validateMock.mock.calls[0][0]).toEqual('-10')
        expect(validateMock.mock.calls[1][0]).toEqual('-20')
        expect(leftInputInst.props['className']).toEqual('input1 error')
        expect(rightInputWrap.props['className']).toEqual('input2 error')
    })

    it('should render no error className', () => {

        validateMock.mockReturnValue(true)

        const twoInputsInst: ReactTestInstance = TestRenderer.create(<TwoInputs leftInput={'10'}
                                                                                rightInput={'20'}
                                                                                onChange={onChangeStubFn}/>).root
        const leftInputInst = twoInputsInst.find(el => el.type === 'input' && el.props['className'].includes('input1'))
        const rightInputWrap = twoInputsInst.find(el => el.type === 'input' && el.props['className'].includes('input2'))

        expect(validateMock.mock.calls[0][0]).toEqual('10')
        expect(validateMock.mock.calls[1][0]).toEqual('20')
        expect(leftInputInst.props['className']).toEqual('input1')
        expect(rightInputWrap.props['className']).toEqual('input2')
    })
})