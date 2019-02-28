import {ParseFnType} from '../../type/containers/two-values/two-values-container.type';

export const parse: ParseFnType = (value) => {
    const numberValue: number = parseInt(value)
    if (isNaN(numberValue)) {
        return null
    }
    if (numberValue < 0) {
        return null
    }
    return numberValue;
}