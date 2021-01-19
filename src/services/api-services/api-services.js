import axios from "axios";



const instance = axios.create({
        baseURL: 'https://swapi.dev/api/'
})
export const getAllPersons = () => {
       instance.get(`people/`)
           .then((response) => {
                console.log(response.data.results)
            })
}
export const getPerson = (id) => {
        return instance.get(`people/${id}/`)
            .then((response) => {

            })
}
export const getAllPlanets = () => {
    return instance.get(`planets/`)
        .then(({data}) => {
            return console.log(data.results)
        })
}
export const getPlanet = (id) => {
    return instance.get(`planets/${id}/`)
        .then((response) => {
            console.log(response.data)
        })
}
export const getAllStarships = (id) => {
    return instance.get(`starships/${id}/`)
        .then((response) => {
            console.log(response.data)
        })
}
export const getStarship = (id) => {
    return instance.get(`starships/${id}/`)
        .then((response) => {
            console.log(response.data)
        })
}


