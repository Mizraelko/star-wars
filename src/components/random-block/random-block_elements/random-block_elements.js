import React from 'react';

const RandomBlockElements = ({planet}) => {
    const [id] = planet
    const elements = planet.map((elem) => {
        const { name, diameter, population, rotation_period, terrain, img} = elem
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
        <>{elements}</>
    );
};

export default RandomBlockElements;