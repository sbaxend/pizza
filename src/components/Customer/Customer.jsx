import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function Customer() {
    const dispatch = useDispatch();

    const {name, address, city, zip } = useSelector(store => store.customerInfo);

    const handleNameChange = (event) => {
        //
    }

    const handleStreetChange = (event) => {
        //
    }

    const handleCityChange = (event) => {
        //
    }

    const handleZipChange = (event) => {
        //
    }

    return (
        <>
            <h1>Step 2: Enter Delivery Address and Choose Delivery Type</h1>
            <form>
                <label htmlFor="name">Name:</label><br />
                <input id="name" type="text" onChange={handleNameChange} placeholder={name} /><br />
                <label htmlFor="street">Street Address:</label><br />
                <input id="street" type="text" onChange={handleStreetChange} placeholder={address}/><br />
                <label htmlFor="city">City:</label><br />
                <input id="city" type="text" onChange={handleCityChange} placeholder={city} /><br />
                <label htmlFor="zip">Zip Code:</label><br />
                <input id="zip" type="text" onChange={handleZipChange} placeholder={zip} /><br />
                <input type="radio" id="delivery" name="delivery_type" value="Delivery" />
                <label htmlFor="delivery">Delivery</label><br />
                <input type="radio" id="pickup" name="delivery_type" value="Pickup" />
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