import React from "react";
import ThemeSwitch from "../../utills/themeSwitcher/ThemeSwitch";
import Header from "../header/header";
import RandomBlock from "../random-block/random-block";



function App({state}) {

    return (
     <div className='app'>
        <ThemeSwitch />
        <Header />
        <RandomBlock/>
     </div>


        )
}


export default App;
