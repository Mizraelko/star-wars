import './App.css';
import React from "react";
function App() {


    const switchTheme = (bool) => () => {

        const arr = ['https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/sketchy/bootstrap.min.css'];
        const ref = document.querySelector('head').querySelector('Link');
        if(bool) {
            ref.href = arr[0]
        }
        console.log(ref)
    }





    // const switchStyleHead = () => {
    //
    //
    //
    //
    //     return documentq
        //document.querySelector('head').innerHTML += '<link rel="stylesheet" href="styles.css" type="text/css"/>';

    return (
    <div className="App">
        <button onClick={() => {switchTheme(true)}}>
            switch
        </button>
    </div>
    )
}

export default App;
