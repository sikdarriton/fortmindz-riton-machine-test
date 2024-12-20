import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { useDispatch } from 'react-redux';
import { addEmployee } from '../userSlice';

export default function CreateEmployee() {

  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('')
  const [age, setAge] = useState('')
  const [image, setImage] = useState(null)


  const createEmployee = (e) => {

    e.preventDefault();

    dispatch(addEmployee({
      "fullName": fullName,
      "email": "abc@gmail.com",
      "phone": "1234567890",
      "image": image,
      "age": age,
      "salary": "10000"
    }));

    setFullName('');
    setAge('');
    setImage('')

  }


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
        <h3>Create Employee</h3>

        <Box
          component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
          onSubmit={createEmployee}
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="FullName"
              defaultValue=""
              placeholder="Type FullName in here…"
              name='fullName'
              onChange={changeFullNameHandler}
            />
            <TextField
              id="outlined-disabled"
              label="Age"
              defaultValue=""
              placeholder="Type Age in here…"
              onChange={changeAgeHandler}
            />

            <TextField
              id="outlined-disabled"
              label="Image"
              defaultValue=""
              placeholder="Type Image URL in here…"
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
