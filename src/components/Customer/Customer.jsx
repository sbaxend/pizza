import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


function Customer() {
    const dispatch = useDispatch();

    let [custInfoState, setCustInfoState] = useState({
        name: 'John Dingle',
        address: '666 No Way',
        city: 'Rack City',
        zip: '12345',
        deliveryType: '',
    });

    const handleNameChange = (event) => {
       setCustInfoState({ ...custInfoState, name: event.target.value});
    }

    const handleStreetChange = (event) => {
        setCustInfoState({ ...custInfoState, address: event.target.value });
    }

    const handleCityChange = (event) => {
        setCustInfoState({ ...custInfoState, city: event.target.value });
    }

    const handleZipChange = (event) => {
        setCustInfoState({ ...custInfoState, zip: event.target.value });
    }

    const handleDeliveryChange = (event) => {
        setCustInfoState({ ...custInfoState, deliveryType: event.target.value})
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(custInfoState);
    }

    return (
        <>
            <h1>Step 2: Enter Delivery Address and Choose Delivery Type</h1>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name:</label><br />
                <input id="name" type="text" onChange={handleNameChange} placeholder={custInfoState.name} /><br />
                <label htmlFor="street">Street Address:</label><br />
                <input id="street" type="text" onChange={handleStreetChange} placeholder={custInfoState.address}/><br />
                <label htmlFor="city">City:</label><br />
                <input id="city" type="text" onChange={handleCityChange} placeholder={custInfoState.city} /><br />
                <label htmlFor="zip">Zip Code:</label><br />
                <input id="zip" type="text" onChange={handleZipChange} placeholder={custInfoState.zip} /><br />
                <input type="radio" onChange={handleDeliveryChange} id="delivery" name="delivery_type" value="Delivery" />
                <label htmlFor="delivery">Delivery</label><br />
                <input type="radio"onChange={handleDeliveryChange} id="pickup" name="delivery_type" value="Pickup" />
                <label htmlFor="pickup">Pickup</label><br />
                <input type="submit" value="Next" /> 
            </form>
           
        </>
    );
}

export default Customer;

/*

Template Object for Reducer

let customerInfo = {
    name: '',
    address: '',
    city: '',
    zip: '',
    deliveryType: ''
}


*/