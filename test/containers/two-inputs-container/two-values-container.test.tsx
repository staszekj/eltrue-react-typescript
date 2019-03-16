import * as React from 'react'
import * as TestRenderer from 'react-test-renderer';
import {ReactTestInstance} from 'react-test-renderer';
import {
    BAR_CSS_CLASS,
    onChangeFnType,
    TwoValuesContainer
} from 'app/containers/two-inputs/two-values-container';
import {parse, getAsNumber, sumUpInputValues} from 'app/containers/two-inputs/two-values-parser';
import {TwoInputs} from 'app/components/two-inputs/two-inputs';
import {ColorCssClassEnum} from 'app/containers/two-bars/two-bars-container';
import {TwoBars} from 'app/components/two-bars/two-bars';
import {HeaderValues} from '../../../app/components/header-values/header-values';

jest.mock('app/containers/two-inputs/two-values-parser')

const parseMock = parse as jest.Mock
const getAsNumberMock = getAsNumber as jest.Mock
const sumUpInputValuesMock = sumUpInputValues as jest.Mock

describe('<TwoValuesContainer />', () => {

    let twoValuesContainerEl: ReactTestInstance;
    const twoBarsFactoryFnMock = jest.fn() as jest.Mock

    beforeEach(() => {
        parseMock.mockReset()
        parseMock.mockImplementation(value => parseInt(value))
        getAsNumberMock.mockReset()
        getAsNumberMock.mockImplementation(value => value)
        sumUpInputValuesMock.mockReset()
        sumUpInputValuesMock.mockImplementation(inputValues => parseMock(inputValues.leftInput) + parseMock(inputValues.rightInput))

        twoValuesContainerEl = TestRenderer.create(<TwoValuesContainer colorClass={ColorCssClassEnum.bwColor}
                                                                       clickHandler={twoBarsFactoryFnMock}/>).root
    })

    it('should render header values', () => {
        const headerValuesEl = twoValuesContainerEl.findByType(HeaderValues)

        expect(headerValuesEl.props['colorClass']).toEqual(ColorCssClassEnum.bwColor)
        expect(headerValuesEl.props['leftValue']).toEqual(10)
        expect(headerValuesEl.props['rightValue']).toEqual(20)
        expect(headerValuesEl.props['result']).toEqual(30)
    })


    it('should handle onChange', () => {
        const twoInputsEl = twoValuesContainerEl.findByType(TwoInputs)
        const onChangeFn: onChangeFnType = twoInputsEl.props['onChange']

        TestRenderer.act(() => {
            onChangeFn('50', '80')
        })

        expect(twoInputsEl.props['leftInput']).toEqual('50')
        expect(twoInputsEl.props['rightInput']).toEqual('80')
    })

    it('should have function instance', () => {
        const leftPanelDivInst = twoValuesContainerEl.findByProps({className: 'left-panel'})
        const twoBarsEl = leftPanelDivInst.findByType(TwoBars)
        const leftBarEl = twoBarsEl.props['leftBar']
        const rightBarEl = twoBarsEl.props['rightBar']

        expect(twoBarsEl).toBeTruthy()
        expect(leftBarEl.props['cssClass']).toEqual(BAR_CSS_CLASS.LEFT_BAR)
        expect(rightBarEl.props['cssClass']).toEqual(BAR_CSS_CLASS.RIGHT_BAR)
    })

    it('should handle onChange with empty values', () => {

        const twoInputsEl = twoValuesContainerEl.findByType(TwoInputs)
        const onChangeFn: onChangeFnType = twoInputsEl.props['onChange']

        TestRenderer.act(() => {
            onChangeFn('', '')
        })

        expect(twoInputsEl.props['leftInput']).toEqual('')
        expect(twoInputsEl.props['rightInput']).toEqual('')
    })

})
