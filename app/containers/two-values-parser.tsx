import {ParseFnType} from 'type/containers/two-values/two-values-container.type';

export const parse: ParseFnType = (value) => {
    const numberValue: number = parseInt(value)
    if (/^\d+$/.test(value) == false) {
        return null
    }
    if (isNaN(numberValue)) {
        return null
    }
    return numberValue;
}