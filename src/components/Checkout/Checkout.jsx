import { useSelector, useDispatch } from "react-redux"

function Checkout() {
    const dispatch = useDispatch();

    const info = useSelector(store => store.customerInfo);
   

    return (
        <div id="checkout">
            <h2>Step 3: Checkout</h2>
            <div id="customer-info">
                <p>{info.name}</p>
                <p>{info.street}</p>
                <p>{info.city}, {info.state} {info.zip}</p>
            </div>
        </div>
    )
}

export default Checkout
