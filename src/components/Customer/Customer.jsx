import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function Customer() {

    return (
        <>
            <h1>Step 2: Enter Delivery Address and Choose Delivery Type</h1>
            <form>
                <label htmlFor="name">Name:</label><br />
                <input id="name" type="text" placeholder="John Dingle" /><br />
                <label htmlFor="street">Street Address:</label><br />
                <input id="street" type="text" placeholder="666 No Way"/><br />
                <label htmlFor="city">City:</label><br />
                <input id="city" type="text" placeholder="Rock City" /><br />
                <label htmlFor="zip">Zip Code:</label><br />
                <input id="zip" type="text" placeholder="12345" /><br />
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