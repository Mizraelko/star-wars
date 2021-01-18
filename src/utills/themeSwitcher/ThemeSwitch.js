import React, {useEffect} from 'react';
import {defaultTheme, switchTheme} from "./bootstrapStyle";


const ThemeSwitch = () => {

    useEffect(() => {
        defaultTheme()
    })
    return (

            <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" disabled="" id="customSwitch2" onClick={(e) => {switchTheme(e)}}/>
                <label className="custom-control-label" htmlFor="customSwitch2"><i className="fa fa-adjust"></i></label>
            </div>

    );
};

export default ThemeSwitch;