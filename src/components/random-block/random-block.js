import React, {useCallback, useEffect, useState} from 'react';
import './random-block.css';
import {getPlanet} from "../../services/api-services/api-services";





const RandomBlock = () => {

    const [state, setState] = useState({})

    const updatePlanet = () => {

        getPlanet()
            .then((obj) => {
                setState(obj)
            })

    }
    if(Object.keys(state).length === 0) {
        updatePlanet()
    }
   useEffect(() => {

       setInterval(()=> {
         updatePlanet();
     }, 5000)

   }, [])
    console.log(state)
    const { name, diameter, population, rotation_period, terrain, img } = state;
    return (
        <div className='random-block'>

            <div className='random-block_img'>
                <img src={img} alt=""/>
            </div>

            <div className='random-block_info'>
                <h3>{name}</h3>
                <div className='container-list'>
                    <ul className='list_item'>
                        <li className="item"><span><div className='info'> diameter:</div><h5>{diameter}</h5></span></li>
                        <li className="item"><span><div className='info'> population:</div><h5>{population}</h5></span></li>
                        <li className="item"><span><div className='info'> rotation period:</div><h5>{rotation_period}</h5></span></li>
                        <li className="item"><span><div className='info'> terrain:</div><h5>{terrain}</h5></span></li>





                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RandomBlock;