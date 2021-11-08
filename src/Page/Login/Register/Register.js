import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'
import useAuth from '../../../Hooks/useAuth'
import CircularProgress from '@mui/material/CircularProgress';

const Register = () => {
    const [loginData, setLogInData] = useState({});


    const { user, registerUser, isLoading, authErrror } = useAuth();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...loginData }
        newLogInData[field] = value;
        setLogInData(newLogInData);
    }

    const handleLogin = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 8 }} variant="h5" gutterBottom component="div">
                        Register
                    </Typography>

                    {!isLoading && <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            label="username"
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Retype Password"
                            name="password2"
                            onChange={handleOnChange}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <br />

                        <Button
                            sx={{ width: '75%', m: 1 }}
                            type="submit"
                            variant='contained'>Register</Button>
                        <br />
                        <Typography>Already Registered? Please<NavLink to="/login"><Button variant="text">Login</Button></NavLink></Typography>

                    </form>}:
                    {isLoading && <CircularProgress />}

                    {
                        user.email && <Alert severity="success">User created successful!</Alert>
                    }
                    {
                        authErrror && <Alert severity="error">{authErrror}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;