//import
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
function Order() {
  const [pizzas, setPizzas] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const customersPizza = useSelector(store => store.customersPizza);

  useEffect(() => {
    fetchPizza();
  }, []);

  const fetchPizza = () => {
    axios
      .get("/api/pizza")
      .then((response) => {
        setPizzas(response.data);
      })
      .catch((error) => {
        console.log("Error fetching pizzas", error);
      });
  };

  const selectPizzas = (event, pizza) => {
    event.preventDefault();
    const selectedPizza = {
        id: pizza.id,
        name: pizza.name,
        price: pizza.price
      };
      console.log(selectedPizza)
    const action = {type: 'ADD_CUSTOMER_PIZZA', payload: selectedPizza}
    dispatch(action);
  };
  


  const nextPage = () => {
    if (customersPizza.length > 0) {
        history.push('/customer-info');
    } else {
        alert('PLEASE SELECT PIZZA');
    }
}
  return (
    <div>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>Price: {pizza.price}</p>
            <img src={pizza.image_path} />
            <br />
            <button onClick={(event) => selectPizzas(event, pizza)}>Add</button>
          </li>
        ))}
      </ul>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default Order;
