import {ParseFnType} from 'app/containers/two-inputs/two-values-container';

export const parse: ParseFnType = (value) => {
    if (/^\d+$/.test(value) == false) {
        return null
    }
    return parseInt(value);
}