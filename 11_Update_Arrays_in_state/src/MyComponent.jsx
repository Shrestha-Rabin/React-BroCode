import React, {useState} from "react";

function MyComponent () {

    const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);

    
    function handleAddFruit () {
        // storing user input
        const newFruit = document.getElementById("fruitInput").value;
        // clearing input field
        document.getElementById("fruitInput").value = "";
        // adding inout value to array
        setFruits(f => [...f, newFruit]);
    }


    function handleRemoveFruit (index) {
        setFruits(fruits.filter((_,i) => i !== index));
    }


    return (
        <div>
            <ul>
                {fruits.map((fruits,index) =>
                <li key={index} onClick={() => handleRemoveFruit(index)}>{fruits}</li>)}
            </ul>

            <input type="text" id="fruitInput" placeholder="Enter fruit name" />
            <button onClick={handleAddFruit}>Add Fruit</button>
        </div>
    );

}

export default MyComponent