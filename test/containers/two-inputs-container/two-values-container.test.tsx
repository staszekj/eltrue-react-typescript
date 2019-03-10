import * as React from 'react'
import * as TestRenderer from 'react-test-renderer';
import {ReactTestInstance} from 'react-test-renderer';
import {TwoValuesContainer, validate} from 'app/containers/two-inputs/two-values-container';
import {parse} from 'app/containers/two-inputs/two-values-parser';
import {TwoInputs} from 'app/components/two-inputs/two-inputs';
import {onChangeFnType} from 'app/components/two-inputs/two-inputs';

jest.mock('app/containers/two-inputs/two-values-parser')

const parseMock = parse as jest.Mock

describe('<TwoValuesContainer />', () => {

    let twoValuesContainerInst: ReactTestInstance;
    const twoBarsFactoryFnMock = jest.fn() as jest.Mock
    const headerValuesFactoryFnMock = jest.fn() as jest.Mock
    const TwoBarsMock = () => <div/>

    beforeEach(() => {
        parseMock.mockReset()

        twoBarsFactoryFnMock.mockReturnValue(<TwoBarsMock/>)
        twoValuesContainerInst = TestRenderer.create(<TwoValuesContainer
            twoBarsFactoryFn={twoBarsFactoryFnMock} headerValuesFactoryFn={headerValuesFactoryFnMock}/>).root
    })

    it('should handle onChange', () => {

        parseMock.mockImplementation((s: string) => {
            if (s === '50')
                return 50
            if (s === '80')
                return 80
            return null
        })
        const twoInputsInst = twoValuesContainerInst.findByType(TwoInputs)
        const onChangeFn: onChangeFnType = twoInputsInst.props['onChange']

        TestRenderer.act(() => {
            onChangeFn('50', '80')
        })

        expect(twoInputsInst.props['leftInput']).toEqual('50')
        expect(twoInputsInst.props['rightInput']).toEqual('80')
        expect(twoBarsFactoryFnMock).toHaveBeenCalledWith(50, 80)
        expect(headerValuesFactoryFnMock).toHaveBeenCalledWith(50, 80, 130)
    })

    it('should have function instance', () => {
        const leftPanelDivInst = twoValuesContainerInst.findByProps({className: 'left-panel'})
        const twoBarsMockInst = leftPanelDivInst.findByType(TwoBarsMock)

        expect(twoBarsMockInst).toBeTruthy()
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
