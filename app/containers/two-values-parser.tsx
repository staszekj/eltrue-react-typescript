import {ParseFnType} from 'type/containers/two-values/two-values-container.type';

export const parse: ParseFnType = (value) => {
    if (/^\d+$/.test(value) == false) {
        return null
    }
    return parseInt(value);
}