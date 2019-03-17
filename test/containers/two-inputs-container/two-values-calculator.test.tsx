import {
    getAsNumber,
    parse,
    slowdown,
    sumUpInputValues,
    validate
} from 'app/containers/two-inputs/two-values-calculator';
import {TwoInputsValuesType} from '../../../app/containers/two-inputs/two-values-container';

describe('TwoValuesParser', () => {

    function getInputValues(): TwoInputsValuesType {
        return {
            leftInput: '10',
            rightInput: '20'
        }
    }

    it('should parse value', () => {
        const val = parse('20')

        expect(typeof val).toEqual('number')
        expect(val).toEqual(20)
    })

    it('should parse value to null for text', () => {
        const val = parse('AA')

        expect(val).toBeNull()
    })

    it('should parse value to null for empty string', () => {
        const val = parse('')

        expect(val).toBeNull()
    })

    it('should parse value to null for negative value', () => {
        const val = parse('-20')

        expect(val).toBeNull()
    })

    it('should parse value to null for digits and letters', () => {
        const val = parse('12o3')

        expect(val).toBeNull()
    })

    it('should return true is parse fn return not null', () => {
        const validationResult = validate('123')

        expect(validationResult).toBeTruthy()
    })

    it('should return false is parse fn return null', () => {
        const validationResult = validate('abc')

        expect(validationResult).toBeFalsy()
    })

    it('should calculate number', () => {
        expect(getAsNumber(1)).toEqual(1)
    })

    it('should calculate number for null value', () => {
        expect(getAsNumber(null)).toEqual(0)
    })

    it('should sum up input values', () => {
        expect(sumUpInputValues(getInputValues())).toEqual(30)
    })

    it('should sum up input values if left value is not a number', () => {
        const inputValues = getInputValues()
        inputValues.leftInput = ''
        expect(sumUpInputValues(inputValues)).toEqual(null)
    })

    it('should sum up input values if right value is not a number', () => {
        const inputValues = getInputValues()
        inputValues.rightInput = ''
        expect(sumUpInputValues(inputValues)).toEqual(null)
    })

    it('should slowly sum up values', async () => {
        const slowdownWithDelay = slowdown(1)
        const result = await slowdownWithDelay(30)

        expect(result).toEqual(30)
    })
})