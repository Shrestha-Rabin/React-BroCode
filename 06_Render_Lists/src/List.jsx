import PropTypes from 'prop-types'

function List (props) {

    // Method 1
    // array of fruits
    // const fruits = ["apple", "orrange", "banana", "coconut", "pineapple"];
    // returning array
    // return(fruits);

    // Method 2
    // by using map method
    // const listItems = fruits.map(fruit => <li>{fruit}</li>);
    // return(<ol>{listItems}</ol>)


    // Method 2
    // Creating array of object
    // const fruits = [{id: 1, name: "apple", calories: 95}, 
    //                 {id: 2, name: "orrange", calories: 45},
    //                 {id: 3, name: "banana", calories: 105},
    //                 {id: 4, name: "coconut", calories: 159},
    //                 {id: 5, name: "pineapple", calories: 37}];
    // to sort array
    // sort in alphabetical order
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); 
    // sort in reverse alphabetical order
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); 
    // sort in ascending order calories
    // fruits.sort((a,b) => a.calories - b.calories); 
    // sort in descending order
    // fruits.sort((a,b) => b.calories - a.calories); 

    // filter objects
        // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
        // // for lowCalFruits
        // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
        //     {lowCalFruit.name}: &nbsp;
        //     {lowCalFruit.calories}</li>);

    // Method 3
    // from app.js file
    const itemList = props.items;
    const category = props.category;
    // for fruits
    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp;
                                                {item.calories}</li>);
    return( <>
        <h3 className="category-name">{category}</h3>
        <ol className="list-name">{listItems}</ol>
        </>);
}

List.defaultProps = {
    category: "Category",
    items: [],
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories:PropTypes.number}))
}

export default List