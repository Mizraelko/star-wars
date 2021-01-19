
import React, {useEffect} from "react";
import ThemeSwitch from "../../utills/themeSwitcher/ThemeSwitch";
import Header from "../header/header";
import RandomBlock from "../random-block/random-block";
import {getAllPlanets} from "../../services/api-services/api-services";


function App() {
        useEffect(() => {
            getAllPlanets();
        })
    return (
     <div className='app'>
        <ThemeSwitch />
        <Header />
        <RandomBlock />
     </div>


        )
}


export default App;
