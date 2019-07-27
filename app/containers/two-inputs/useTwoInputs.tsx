import {useState} from "react";
import {slowdown, sumUpInputValues} from "./two-values-calculator";
import {TwoInputsValuesType, TwoValuesContainerStateType} from "./two-values-container";

export const initState: TwoInputsValuesType = {
    leftInput: '50',
    rightInput: '80'
}

export const useTwoInputs = () => {

    const [inputValues, setInputValues] = useState<TwoValuesContainerStateType>(initState)
    const [result, setResult] = useState<number | null>(sumUpInputValues(initState))

    const setTwoInputValues = (values: TwoInputsValuesType) => {
        setInputValues(values)
        setResult(null)
        slowdown(2000)(sumUpInputValues(values))
            .then(setResult)
    }

    return {
        inputValues,
        result,
        setTwoInputValues
    }
}
