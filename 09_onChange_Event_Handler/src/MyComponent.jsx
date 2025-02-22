import React, {useState} from "react";

function MyComponent () {

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");


    function handleNameChange (event) {
        setName(event.target.value);
    }


    function handleCommentChange (event) {
        setComment(event.target.value);
    }


    function handlePaymentChange (event) {
        setPayment(event.target.value);
    }


    function handleshippingChange (event) {
        setShipping(event.target.value);
    }


    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p> 


            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>


            <select value={payment} onChange={handlePaymentChange}>
                {/* empty string to make it default */}
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>


            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleshippingChange} />
                Pick Up
            </label> <br />
            <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleshippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

        </div>
    );
}

export default MyComponent