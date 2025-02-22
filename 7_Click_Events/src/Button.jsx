
function Button () {

    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3) {
    //         console.log(`${name}! you clicked me ${count} times.`);
    //     }
    //     else {
    //         console.log(`${name}! stop clicking me.`);
    //     }
    // }
    // return (
    //     <button onClick={() => handleClick("Bro")}>Click Me</button>
    // );

    
    // for specifying event
    const handleEvent = (e) => {
        // changing text content
        e.target.textContent = "OUCH !"};
    return(
        <button onClick={(e)=> handleEvent(e)}>Click Me</button>
    );

}

export default Button