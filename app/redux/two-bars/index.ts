import {ColorCssClassEnum} from "app/containers/two-bars/two-bars-container";

export const TWO_BARS_CLICK = 'TWO_BARS/click';

export type TwoBarsClickStateType = {
    colorCssClass: ColorCssClassEnum
}

export type TwoBarsClickAction = {
    type: string,
    payload: TwoBarsClickStateType
}

// Action Creators
export function twoBarsClick(payload: TwoBarsClickStateType): TwoBarsClickAction {
    return {
        type: TWO_BARS_CLICK,
        payload
    }
}

// Selectors
export function selectColorCssClass(twoBarsState: TwoBarsClickStateType) {
    return twoBarsState.colorCssClass;
}

// Int state
export const initState: TwoBarsClickStateType = {
    colorCssClass: ColorCssClassEnum.regularColor
};

// Reducer
export function twoBarsReducer(state = initState, action: TwoBarsClickAction) {
    switch (action.type) {
        case TWO_BARS_CLICK:
            return {
                ...state,
                colorCssClass: action.payload.colorCssClass,
            };
        default:
            return state;
    }
}
