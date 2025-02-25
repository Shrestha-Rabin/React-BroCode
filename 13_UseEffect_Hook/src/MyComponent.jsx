import React, {useState, useEffect} from "react"

function MyComponent () {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");


    function addCount () {
        setCount(c => c + 1);
    }

    useEffect(() => {
        document.title = `Count: ${count}`;
    },[count, color])


    function subCount () {
        setCount(c => c - 1);

    }

    function changeColor () {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Subtract</button> <br />
            <button onClick={changeColor}>Change color</button>
        </div>
    );
}

export default MyComponent