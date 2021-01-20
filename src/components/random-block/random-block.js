import React, {useEffect, useState} from 'react';
import './random-block.css';
import {getPlanet} from "../../services/api-services/api-services";





const RandomBlock = () => {

    const [state, setState] = useState({
        name: null,
        diameter: null,
        population: null,
        rotation_period: null,
        terrain: null
    })
    const updatePlanet = () => {
        getPlanet(5)
            .then((planet) => {
                setState(planet);
            })

    }

   useEffect(() => {
      updatePlanet();

   }, [])
    console.log(state)
    const { name, diameter, population, rotation_period, terrain } = state;
    return (
        <div className='random-block'>

            <div className='random-block_img'>
                <img src="" alt=""/>
            </div>

            <div className='random-block_info'>
                <h3>name planet</h3>
                <div className='container-list'>
                    <ul className='list_item'>
                        <li className="item"><span><h5>item</h5></span></li>
                        <li className="item"><span><h5>item</h5></span></li>
                        <li className="item"><span><h5>item</h5></span></li>
                        <li className="item"><span><h5>item</h5></span></li>
                        <li className="item"><span><h5>item</h5></span></li>
                        <li className="item"><span><h5>item</h5></span></li>
                        <li className="item"><span><h5>item</h5></span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RandomBlock;