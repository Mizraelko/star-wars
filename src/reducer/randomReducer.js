import {getPlanet} from "../services/api-services/api-services";

const SET_PLANET = 'SET_PLANET';
const initialState = {

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

export const setPlanet = () => {
    getPlanet()
        .then((obj) => {
            setState(obj)
        })
}