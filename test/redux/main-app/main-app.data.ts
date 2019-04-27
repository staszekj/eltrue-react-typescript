import configureStore from "redux-mock-store";
import {ColorCssClassEnum} from "app/containers/two-bars/two-bars-container";

const mockStore = configureStore()

export function createMockStore() {
    return mockStore({
        twoBars: {
            colorCssClass: ColorCssClassEnum.regularColor
        }
    })
}
