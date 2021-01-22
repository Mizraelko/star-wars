import React from "react";
import ThemeSwitch from "../../utills/themeSwitcher/ThemeSwitch";
import Header from "../header/header";
import RandomBlock from "../random-block/random-block";
import LoadingIndicator from "../../utills/loadingIndicator/loadingIndicator";



function App() {

    return (
     <div className='app'>
         <ThemeSwitch />
        <Header />
        <RandomBlock/>
         <LoadingIndicator/>
     </div>


        )
}


export default App;
