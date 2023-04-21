import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header.jsx";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Container from "@mui/material/Container";
function Customer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const totalCost = useSelector((store) => store.totalCost);

  let [custInfoState, setCustInfoState] = useState({});
  const [deliveryType, setDeliveryType] = useState("Delivery");
  //Storing customer name in state
  const handleNameChange = (event) => {
    setCustInfoState({ ...custInfoState, name: event.target.value });
  };
  //Storing customer address in state
  const handleStreetChange = (event) => {
    setCustInfoState({ ...custInfoState, address: event.target.value });
  };
  //Storing customer city in state
  const handleCityChange = (event) => {
    setCustInfoState({ ...custInfoState, city: event.target.value });
  };
  //Storing customer zip in state
  const handleZipChange = (event) => {
    setCustInfoState({ ...custInfoState, zip: event.target.value });
  };
  //Storing customer delivery type in state
  const handleDeliveryChange = (event) => {
    setDeliveryType(event.target.value);
    setCustInfoState({ ...custInfoState, deliveryType: event.target.value });
  };
  //Sending values in state as an object to redux
  const submitForm = (event) => {
    event.preventDefault();
    const action = {
      type: "SET_CUSTOMER_INFO",
      payload: {
        name: custInfoState.name,
        address: custInfoState.address,
        city: custInfoState.city,
        zip: custInfoState.zip,
        deliveryType: custInfoState.deliveryType,
      },
    };
    dispatch(action);

    //Validation and pushing history to /Checkout
    if (Object.keys(custInfoState).length === 5) {
      history.push("/Checkout");
    } else {
      alert("Please fill out the entire form");
    }
  };

  return (
    <div>
      <Header />
      <ProgressBar currentStep={1} />
      {/* <h2
                style={{display: "flex", justifyContent: "right"}}
            >Total Cost:{totalCost}</h2> */}
      <h1>Step 2: Enter Delivery Address and Choose Delivery Type</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={submitForm}>
          <label htmlFor="name">Name:</label>
          <br />
          <TextField
            variant="outlined"
            id="name"
            type="text"
            onChange={handleNameChange}
            placeholder="John Dingle"
          />
          <br />
          <label htmlFor="street">Street Address:</label>
          <br />
          <TextField
            variant="outlined"
            id="street"
            type="text"
            onChange={handleStreetChange}
            placeholder="666 No Way"
          />
          <br />
          <label htmlFor="city">City:</label>
          <br />
          <TextField
            variant="outlined"
            id="city"
            type="text"
            onChange={handleCityChange}
            placeholder="Rack City"
          />
          <br />
          <label htmlFor="zip">Zip Code:</label>
          <br />
          <TextField
            variant="outlined"
            id="zip"
            type="text"
            onChange={handleZipChange}
            placeholder="12345"
          />
          <br />
          {/* radio buttons */}

          <RadioGroup name="delivery_type" onChange={handleDeliveryChange}>
            <FormControlLabel
              value="Delivery"
              control={<Radio />}
              label="Delivery"
            />
            <FormControlLabel
              value="Pickup"
              control={<Radio />}
              label="Pickup"
            />
          </RadioGroup>
          <Button variant="contained" type="submit">
            Next
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Customer;
