import {ColorCssClassEnum} from "app/containers/two-bars/two-bars-container";
import {Action} from 'redux'

export type TWO_BARS_CLICK_TYPE = 'TWO_BARS/click'

export type TwoBarsClickStateType = {
    colorCssClass: ColorCssClassEnum
}

export type TwoBarsClickAction = Action<TWO_BARS_CLICK_TYPE> & {
    type: TWO_BARS_CLICK_TYPE,
    payload: TwoBarsClickStateType
}

export const TWO_BARS_CLICK: TWO_BARS_CLICK_TYPE = 'TWO_BARS/click';

// Action Creators
export function twoBarsClick(colorCssName: ColorCssClassEnum): TwoBarsClickAction {
    if (colorCssName === ColorCssClassEnum.regularColor) {
        return {
            type: TWO_BARS_CLICK,
            payload: {
                colorCssClass: ColorCssClassEnum.bwColor
            }
        }
    } else {
        return {
            type: TWO_BARS_CLICK,
            payload: {
                colorCssClass: ColorCssClassEnum.regularColor
            }
        }
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
export function twoBarsReducer(state = initState, action: TwoBarsClickAction): TwoBarsClickStateType {
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
