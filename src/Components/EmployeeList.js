import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAsync, removeEmployee } from '../userSlice';

function EmployeeList() {

    //const [employeeList, setEmployeeList] = useState([])

    const dispatch = useDispatch();
    const employeeList = useSelector((state) => state.user.users);
    /*
    const createEmployee = () => {
        
        var raw = {
            "fullName": "souvik",
            "email": "sk@gmail.com",
            "phone": "+9133434343",
            "image": "https://fastly.picsum.photos/id/802/536/354.jpg?hmac=NIrYdwaO2OhkZe5OvcM_gwLFnEjNw7dHTbRJ_s8lGHw",
            "age": "24",
            "salary": 12000
        }

        var requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        fetch("https://interviewtesting.onrender.com/v1/users/employee/create", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    
    */
    /*
    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow'
        };

        fetch("https://interviewtesting.onrender.com/v1/users/employee/list", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                //console.log(result.data)
                setEmployeeList(result.data)
            })
            .catch(error => console.log('error', error));


    }, []);
    */

    useEffect(() => {
        dispatch(fetchUsersAsync());
    }, [dispatch]);

    const handleRemoveUser = (id) => {
        dispatch(removeEmployee(id));
    };

    return (
        <>


            <Container maxWidth="sm">
                <div>
                    <Link to="/create"><Button variant="contained" >Create Employee</Button></Link>
                </div>
                <h3>Employee List</h3>

                {employeeList?.length === 0 ? (

                    <h2>Employee list is empty</h2>

                ) : (


                    <TableContainer component={Paper}>
                        <Table align="center" sx={{ maxWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Fullname</TableCell>
                                    <TableCell align="right">Age</TableCell>
                                    <TableCell align="center">Image</TableCell>
                                    <TableCell colSpan={2} align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {employeeList.map((employee, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {employee.fullName}
                                        </TableCell>
                                        <TableCell align="right">{employee.age}</TableCell>
                                        <TableCell align="right">
                                            <img src={employee.image} height="100" width="100" alt={employee.fullName} />
                                        </TableCell>
                                        <TableCell align="right">
                                            <Link to={'/edit/' + employee._id}>
                                                <Button variant="contained" >Edit</Button>
                                            </Link>

                                        </TableCell>
                                        <TableCell align="right"> <Button variant="contained" onClick={
                                            () => handleRemoveUser(employee._id)} >Delete</Button> </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>


                )}
            </Container>
        </>

    )
}

export default EmployeeList