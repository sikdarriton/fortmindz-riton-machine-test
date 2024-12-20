import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function EditEmployee() {

    let { id } = useParams();
    const [employee, setEmployee] = useState({})
    const [fullName, setFullName] = useState('')
    const [age, setAge] = useState('')
    const [image, setImage] = useState(null)

    const updateEmployee = (e) => {
        e.preventDefault();
        console.log(fullName)
        console.log(age)
        console.log(image)

        var raw = {
            "fullName": fullName,
            "email": employee.email,
            "phone": employee.phone,
            "image": image,
            "age": age,
            "salary": employee.salary

        }

        var requestOptions = {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        fetch("https://interviewtesting.onrender.com/v1/users/employee-update/" + id, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }



    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow'
        };

        fetch("https://interviewtesting.onrender.com/v1/users/employee/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setEmployee(result.data)
                setImage(result.data.image)
            })
            .catch(error => console.log('error', error));


    }, [id]);

    const changeFullNameHandler = (e) => {

        setFullName(e.target.value)
    }

    const changeAgeHandler = (e) => {

        setAge(e.target.value)
    }

    const changeImageHandler = (e) => {

        setImage(e.target.value)
    }

    return (
        <>
            <Container maxWidth="sm">

                <div>EditEmployee</div>
                <img src={image} height="100" width="100" alt={employee.fullName}/>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                    onSubmit={updateEmployee}
                >
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label=""
                            defaultValue={employee.fullName}
                            onChange={changeFullNameHandler}
                            name='fullName'
                        />
                        <TextField

                            id="outlined-disabled"
                            label=""
                            defaultValue={employee.age}
                            onChange={changeAgeHandler}
                        />

                        <TextField

                            id="outlined-disabled"
                            label=""
                            defaultValue={employee.image}
                            onChange={changeImageHandler}
                        />

                        <Stack spacing={2} direction="row">

                            <Button type="submit" variant="contained">Submit</Button>

                            <Link to='/'><Button variant="contained">Back</Button></Link>
                        </Stack>

                    </div>
                </Box>
            </Container>
        </>
    )
}

export default EditEmployee