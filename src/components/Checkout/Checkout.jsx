import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import './Checkout.css';
import { Button, Container, TableFooter } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";


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
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        history.push('/');
    };

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
            handleClickOpen();
            // history.push('/');
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong');
        })
    }


    return (
        <Container sx={{ padding: '0 90px', textAlign: 'left' }} id="checkout">
            <h2>Step 3: Checkout</h2>
            <hr />
            <h4>{customer_name}</h4>
            <h5>Order type: {type}</h5>
            <p>{street_address}</p>
            <p>{city}, {zip}</p>
            <TableContainer component={Paper}>
                <Table sx={{ marginTop: '20px' }}>
                    <TableHead sx={{ backgroundColor: 'lightgray' }}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            pizzas.map(pizza => (
                                <TableRow key={pizza.id}>
                                    <TableCell>{pizza.name}</TableCell>
                                    <TableCell>{pizza.price}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                                Grand Total:
                            </TableCell>
                            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                                <strong>{Math.round(total * 100) / 100}</strong>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <Button variant="contained" onClick={submitOrder} sx={{ marginTop: '20px' }}>Submit</Button>
            {/* <button onClick={submitOrder}>Submit</button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Your Order has been submitted"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        We are working on preparing your order. Thank you for shopping with Prime Pizza!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="success" onClick={handleClose} autoFocus>
                        Return to Homepage
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default Checkout;