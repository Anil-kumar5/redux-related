import { ITEM_ADD, ITEM_REMOVE } from "./ActionType";

let id = 0;
function reducer(state = [], action) {
    switch (action.type) {
        case ITEM_ADD:
            return [
                ...state,
                {
                    id: ++id,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case ITEM_REMOVE:
            return state.filter(item => item.id != action.payload.id);
        default: return state
    };
};

export default reducer