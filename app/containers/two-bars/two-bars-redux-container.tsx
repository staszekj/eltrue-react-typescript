import {connect} from 'react-redux'
import {
    TWO_BARS_CLICK_TYPE,
    twoBarsClick,
    TwoBarsClickStateType
} from "app/redux/two-bars/two-bars";
import {
    ColorCssClassEnum,
    TwoBarsContainer,
    TwoBarsContainerDispatchProps,
    TwoBarsContainerStateProps
} from "./two-bars-container";
import {Dispatch, Action} from "redux";

function mapStateToProps(state: TwoBarsClickStateType): TwoBarsContainerStateProps {
    return {
        colorCssClass: state.colorCssClass
    }
}

function mapDispatchToProps(dispatch: Dispatch<Action<TWO_BARS_CLICK_TYPE>>): TwoBarsContainerDispatchProps {
    return {
        twoBarsClickHandler: (colorCssClass: ColorCssClassEnum) => dispatch(twoBarsClick(colorCssClass))
    }
}

export const TwoBarsReduxContainer = connect<TwoBarsContainerStateProps, TwoBarsContainerDispatchProps>(mapStateToProps, mapDispatchToProps)(TwoBarsContainer)
