import React, {useEffect, useReducer} from 'react';
import {getAllPersons} from "../../services/api-services/api-services";

const PlanetDetails = () => {
    const [state, dispatch] = useReducer(reducer, initialArg, init);
    useEffect(() => {
        setInterval(()=> {
            getAllPersons();
        }, 5000)
    })

    return (
        <div>
            
        </div>
    );
};

export default PlanetDetails;