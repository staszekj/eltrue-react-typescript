import React, {useState, createContext, FunctionComponent} from 'react';

export const useTwoInputs = () => {
    const [leftCounter, setLeftCounter] = useState(0)
    const [rightCounter, setRightCounter] = useState(0)

    const handleLeftClick = () => {
        setLeftCounter(leftCounter + 1)
    }

    const handleRightClick = () => {
        setRightCounter(rightCounter + 1)
    }

    return {
        handleLeftClick,
        handleRightClick,
        leftCounter,
        rightCounter
    }
};

export type TReturnOfUseTwoInputs = ReturnType<typeof useTwoInputs>;
export const TwoInputsCtx = createContext<TReturnOfUseTwoInputs | null>(null);

export const TwoInputsProvider: FunctionComponent<{}> = ({children}) => {
    return (
        <TwoInputsCtx.Provider value={useTwoInputs()}>
            {children}
        </TwoInputsCtx.Provider>
    )
}
