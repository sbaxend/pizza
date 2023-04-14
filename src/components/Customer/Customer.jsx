import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


function Customer() {
    const dispatch = useDispatch();
    
    let [custInfoState, setCustInfoState] = useState({});
    //Storing customer name in state
    const handleNameChange = (event) => {
       setCustInfoState({ ...custInfoState, name: event.target.value});
    }
    //Storing customer address in state
    const handleStreetChange = (event) => {
        setCustInfoState({ ...custInfoState, address: event.target.value });
    }
    //Storing customer city in state
    const handleCityChange = (event) => {
        setCustInfoState({ ...custInfoState, city: event.target.value });
    }
    //Storing customer zip in state
    const handleZipChange = (event) => {
        setCustInfoState({ ...custInfoState, zip: event.target.value });
    }
    //Storing customer delivery type in state
    const handleDeliveryChange = (event) => {
        setCustInfoState({ ...custInfoState, deliveryType: event.target.value})
    }
    //Sending values in state as an object to redux
    const submitForm = (event) => {
        event.preventDefault();
        const action = {
            type: 'SET_CUSTOMER_INFO',
            payload: {
                name: custInfoState.name,
                address: custInfoState.address,
                city: custInfoState.city,
                zip: custInfoState.zip,
                deliveryType: custInfoState.deliveryType,
            }
        }
        dispatch(action);
    }

    return (
        <>
            <h1>Step 2: Enter Delivery Address and Choose Delivery Type</h1>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name:</label><br />
                <input id="name" type="text" onChange={handleNameChange} placeholder="John Dingle" /><br />
                <label htmlFor="street">Street Address:</label><br />
                <input id="street" type="text" onChange={handleStreetChange} placeholder="666 No Way"/><br />
                <label htmlFor="city">City:</label><br />
                <input id="city" type="text" onChange={handleCityChange} placeholder="Rack City" /><br />
                <label htmlFor="zip">Zip Code:</label><br />
                <input id="zip" type="text" onChange={handleZipChange} placeholder="12345" /><br />
                <input type="radio" onChange={handleDeliveryChange} id="delivery" name="delivery_type" value="Delivery" />
                <label htmlFor="delivery">Delivery</label><br />
                <input type="radio" onChange={handleDeliveryChange} id="pickup" name="delivery_type" value="Pickup" />
                <label htmlFor="pickup">Pickup</label><br />
                <input type="submit" value="Next" /> 
            </form>
           
        </>
    );
}

export default Customer;
