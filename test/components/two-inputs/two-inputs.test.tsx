import * as React from 'react'
import * as TestRenderer from 'react-test-renderer';
import {ReactTestInstance, ReactTestRenderer} from 'react-test-renderer';
import {TwoInputs} from 'app/components/two-inputs/two-inputs';
import {expand} from 'rxjs/operators';
import {ChangeEvent} from 'react';

describe('<TwoInputs />', () => {

    const changeEvent: ChangeEvent<HTMLInputElement> = {
        target: {
            value: '123'
        },
    } as ChangeEvent<HTMLInputElement>

    const onChangeStubFn = jest.fn((a: string, b: string) => undefined)

    beforeEach(() => {
        onChangeStubFn.mockReset()
    })

    it('should render two inputs element with value and className properties', () => {

        const twoInputsWrap: ReactTestInstance = TestRenderer.create(<TwoInputs leftInput={'10'}
                                                                                rightInput={'20'}
                                                                                onChange={onChangeStubFn}/>).root
        const divWrap = twoInputsWrap.findByProps({className: 'right-panel background-color-green'})
        const leftInputInst = divWrap.find(el => el.type === 'input' && el.props['className'] === 'input1')
        const rightInputWrap = divWrap.find(el => el.type === 'input' && el.props['className'] === 'input2')

        expect(divWrap).toBeTruthy()
        expect(leftInputInst.props['value']).toEqual('10')
        expect(rightInputWrap.props['value']).toEqual('20')
    })

    it('should call onChange function for leftInput onChange', () => {
        const twoInputsInst: ReactTestInstance = TestRenderer.create(<TwoInputs leftInput={'10'}
                                                                                rightInput={'20'}
                                                                                onChange={onChangeStubFn}/>).root
        const divInst = twoInputsInst.findByProps({className: 'right-panel background-color-green'})
        const leftInputInst = divInst.find(el => el.type === 'input' && el.props['className'] === 'input1')
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
})