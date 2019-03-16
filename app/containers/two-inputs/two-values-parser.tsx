import {TwoInputsValuesType} from 'app/containers/two-inputs/two-values-container';

export function parse(value: string): number | null {
    if (/^\d+$/.test(value) == false) {
        return null
    }
    return parseInt(value);
}

export function sumUpInputValues(inputValues: TwoInputsValuesType): number | null {
    const leftInputParsed = parse(inputValues.leftInput)
    const rightInputParsed = parse(inputValues.rightInput)
    return leftInputParsed === null || rightInputParsed === null ? null : leftInputParsed + rightInputParsed
}

export const slowlySumUpInputValues = (delay: number) => (inputValues: TwoInputsValuesType) => {
    return new Promise<number | null>((resolve) => {
        function doCalculation() {
            const result: number | null = sumUpInputValues(inputValues)
            resolve(result)
        }

        setTimeout(doCalculation, delay)
    })
}

export function getAsNumber(value: number | null) {
    return value ? value : 0
}

export function validate(value: string): boolean {
    return parse(value) !== null
}