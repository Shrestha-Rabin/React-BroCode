import React, {useState} from "react";

function MyComponent () {

    // js object inside useState
    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"});

    // c => is an updater function
    // ({}) small barcket allows to create an object withinn arrow function, else the curly bracket only recognize it as multiline js code
    // c is the first letter of current state
    // ...c, (called spread operator) this helps to retain other previous properties, if not used then it will not show the make and model properties

    function handleYearChange (event) {
        setCar(c => ({...c, year: event.target.value}));
    }

    function handleMakeChange (event) {
        setCar(c => ({...c, make: event.target.value}));
    }

    function handleModelChange (event) {
        setCar(c => ({...c, model: event.target.value}));
    }

    return (
        <div>
            <p>Your favourite car is: {car.year} {car.make} { car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange} />  
            <br />
            <input type="text" value={car.make} onChange={handleMakeChange} />      
            <br />
            <input type="text"  value={car.model} onChange={handleModelChange} />    
        </div>
    );
}

export default MyComponent