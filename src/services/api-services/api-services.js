import axios from "axios";
import {setAction, setRandomPlanet} from "../../reducer/randomReducer";


const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})


export const getAllPersons = () => {
    instance.get(`people/`)
        .then((response) => {

        })
}
export const getPerson = (id) => {
    instance.get(`people/${id}/`)
        .then((response) => {

        })
}
export const getAllPlanets = () => {
    instance.get(`planets/`)
        .then(({data}) => {

        })
}

const transformPlanet = () => {

}
const regExp = (item) => {
    const regEx = /\/([0-9]*)\/$/;
    return item.url.match(regEx)[1]
}

export const getPlanet = (id = Math.floor(Math.random() * 10) + 2) => {
    return instance.get(`planets/${id}/`)
        .then(({data}) => {
            const idItem = regExp(data);
            const img = `https://starwars-visualguide.com/assets/img/planets/${idItem}.jpg`
            setAction(img, id, data)()

            return {
                ...data,
                img: img,
                id: parseInt(idItem)
            }
        })
}
export const getAllStarships = (id) => {
    instance.get(`starships/${id}/`)
        .then((response) => {

        })
}
export const getStarship = (id) => {
    instance.get(`starships/${id}/`)
        .then((response) => {

        })

}




