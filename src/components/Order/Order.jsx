//import
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "./OrderItem";
import Header from "../Header/Header";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


function Order() {
  const [pizzas, setPizzas] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const customersPizza = useSelector((store) => store.customersPizza);
  const totalCost = useSelector((store) => store.totalCost);

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
      price: pizza.price,
      quantity: 1,
    };
    console.log(selectedPizza);
    const action = { type: "ADD_CUSTOMER_PIZZA", payload: selectedPizza };
    dispatch(action);
    const pizzaPrice = { type: "ADD_TOTAL_COST", payload: Number(pizza.price) };
    dispatch(pizzaPrice);
  };

  const nextPage = () => {
    if (customersPizza.length > 0) {
      history.push("/customer-info");
    } else {
      alert("PLEASE SELECT PIZZA");
    }
  };
  return (
    <div>
      <Header />
      <Grid container spacing={2}>
        {pizzas.map((pizza) => (
          <Grid key={pizza.id} item xs={12} sm={6} md={4}>
            <OrderItem key={pizza.id} 
            selectPizzas={selectPizzas}
            pizza={pizza}/>
          </Grid>
        ))}
      </Grid>
      <Button onClick={nextPage}>Next</Button>
    </div>
  );
}

export default Order;
