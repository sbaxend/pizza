import axios from "axios";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from "@mui/material";
import { useSelector } from "react-redux";

function Admin() {
    const [orders, setOrders] = useState([]);

    const total = useSelector(store => store.totalCost);

    const getOrders = () => {
        axios.get('/api/order').then(response => {
            setOrders(response.data);
        }).catch(error =>{
            console.log(`Error in GET ${error}`);
            alert('Something went wrong.');
        });
    }

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ marginTop: '20px' }}>
                    <TableHead sx={{ backgroundColor: 'lightgray' }}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Time Order Placed</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders.map(order => (
                                <TableRow key={order.id}>
                                    <TableCell>{order.customer_name}</TableCell>
                                    <TableCell>{order.time}</TableCell>
                                    <TableCell>{order.type}</TableCell>
                                    <TableCell>${order.total}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Admin;