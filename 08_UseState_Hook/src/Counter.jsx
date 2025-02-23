import React, {useState} from "react"

function Counter () {

    const [count, setCount] = useState(0);

    const addCounter = () => {
        setCount(count + 1);
    }

    const subCounter = () => {
        setCount(count - 1);
    }

    const resetCounter = ()=> {
        setCount(0);
    }
    return (
        <div className="count-container">
            <h1>Lets Count Together.</h1>
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={addCounter}>Add</button>
            <button className="counter-button" onClick={subCounter}>Sub</button>
            <button className="counter-button" onClick={resetCounter}>Reset</button>
        </div>
    );
}

export default Counter