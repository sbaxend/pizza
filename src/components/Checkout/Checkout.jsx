import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
        <div id="checkout">
            <h2>Step 3: Checkout</h2>
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
                    <li>
                        Name: {pizza.name}
                        Quantity: {pizza.quantity}
                    </li>
                ))
            }
            </ul>
            <button onClick={submitOrder}>Submit</button>
        </div>
    )
}

export default Checkout;