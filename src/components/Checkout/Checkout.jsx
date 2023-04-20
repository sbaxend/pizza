import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import './Checkout.css';
import { Container, TableBody, TableCell } from "@mui/material";
import Table from "@mui/material";
import TableBody from "@mui/material";
import TableCell from "@mui/material";

function Checkout() {
    const dispatch = useDispatch();
    const history = useHistory();

    const customer_name = useSelector(store => store.customerInfo.name);
    const street_address = useSelector(store => store.customerInfo.address);
    const city = useSelector(store => store.customerInfo.city);
    const zip = useSelector(store => store.customerInfo.zip);
    const type = useSelector(store => store.customerInfo.deliveryType);
    const total = useSelector(store => store.totalCost);
    const pizzas = useSelector(store => store.customersPizza);

    const orderDetails = {
        customer_name,
        street_address,
        city,
        zip,
        type,
        total,
        pizzas
    }

    const submitOrder = () => {
        axios.post('/api/order', orderDetails).then((response) => {
            console.log(response);
            const action = { type: 'CLEAR_FORM' };
            dispatch(action);
            history.push('/');
        })
    }

    return (
        <Container sx={{padding: '0 90px', textAlign: 'left'}} id="checkout">
            <h2>Step 3: Checkout</h2>
            <hr />
            <h4>{customer_name}</h4>
            <p>{street_address}</p>
            <p>{city}, {zip}</p>
            <ul style={{listStyle: 'none'}}>
                <li>{customer_name}</li>
                <li>{street_address}</li>
                <li>{city}</li>
                <li>{zip}</li>
                <li>{type}</li>
                <li>{total}</li>
            </ul>
            <ul style={{listStyle: 'none'}}>
            {
                pizzas.map((pizza) => (
                    <li key={pizza.id}>
                        Name: {pizza.name}
                        Quantity: {pizza.quantity}
                    </li>
                ))
            }
            </ul>
            <button onClick={submitOrder}>Submit</button>
        </Container>
    )
}

export default Checkout;