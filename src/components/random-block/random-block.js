import React, {useCallback, useEffect, useState} from 'react';
import './random-block.css';
import {getPlanet} from "../../services/api-services/api-services";





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

   useEffect(() => {
       if(Object.keys(state.planet).length === 0) {
           updatePlanet()
       }

       setInterval(()=> {
         updatePlanet();
     }, 5000)

   }, [])




    const element = state.planet.map((elem) => {
        const { name, diameter, population, rotation_period, terrain, img, id } = elem
        return(
         <div className='random-block' key={id}>
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
        )
    })
    return (

     <div>{element}</div>

    );
};

export default RandomBlock;