


const SET_PLANET = 'SET_PLANET';
const initialState = {

}
const randomPlanetReducer = (state, action) => {
    switch (action.type) {
        case SET_PLANET:
            return {
                ...state,
                action
            }
        default:
            return state
    }


}


export const setAction = (img, id, {...planet}) => () => {

    return function (img, id, {...planet}) {
        console.log('use')
        return {
            type: SET_PLANET,
            planet: {
                ...planet,
                img,
                id: parseInt(id)
            }
        }
    }


}


