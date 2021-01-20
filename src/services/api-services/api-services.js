import axios from "axios";


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
export const getPlanet = (id) => {
    return instance.get(`planets/${id}/`)
        .then(({data}) => {
            return data
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




