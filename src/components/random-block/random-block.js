import React, {useEffect, useState} from 'react';
import './random-block.css';
import {getPlanet} from "../../services/api-services/api-services";
import RandomBlockElements from "./random-block_elements/random-block_elements";


const RandomBlock = () => {

    const [state, setState] = useState({
        planet: []
    })

    const updatePlanet = () => {

        getPlanet()
            .then((obj) => {

                setState(() => {
                    return {
                        planet: [obj]
                    }
                })
            })

    }
    if (state.planet.length === 0) {

        updatePlanet()
    }

    useEffect(() => {

        setInterval(() => {
            updatePlanet();
        }, 5000)

    }, [])


    return (
        <RandomBlockElements planet={state.planet}/>
    );
};

export default RandomBlock;