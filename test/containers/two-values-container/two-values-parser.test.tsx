import {parse} from 'app/containers/two-values-parser';

describe('TwoValuesParser', () => {

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
})