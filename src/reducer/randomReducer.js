const SET_PLANET = 'SET_PLANET';
const initialState = {
    planet: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLANET:
            return {
                ...state,
                planet: action.planet

            }
        default:
            return state
    }
}

