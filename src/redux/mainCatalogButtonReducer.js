const initialState = {
    buttons: [
        { id: 0, name: 'Свадьба', isSelected: true },
        { id: 1, name: 'Мужу', isSelected: false },
        { id: 2, name: 'Жене', isSelected: false },
        { id: 3, name: 'Партнёру', isSelected: false },
        { id: 4, name: 'Коллекции', isSelected: false },
        { id: 5, name: 'Редкость', isSelected: false }
    ]
}
const NULL_ACTIVE = 'NULL-ACTIVE';
const SET_ACTIVE = 'SET-ACTIVE';

const mainCatalogButtonReducer = (state = initialState, action) => {
    switch (action.type) {
        case NULL_ACTIVE:
            return { ...state, buttons: state.buttons.map(item => ({ ...item, isSelected: false })) }
        case SET_ACTIVE:
            return { ...state, buttons: state.buttons, ...state.buttons[action.id].isSelected = true }
        default:
            return state
    }
}

export const nullActive = () => ({ type: NULL_ACTIVE });
export const setActive = (id) => ({ type: SET_ACTIVE, id });

export const selectButton = (id) => (dispatch) => {
    dispatch(nullActive());
    dispatch(setActive(id));
}

export default mainCatalogButtonReducer;