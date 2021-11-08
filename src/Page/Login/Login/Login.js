import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {

    const [loginData, setLogInData] = useState({});
    const { user, authErrror, loginUser, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...loginData }
        newLogInData[field] = value;
        setLogInData(newLogInData);
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid item container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 8 }} variant="h5" gutterBottom component="div">
                        Login
                    </Typography>

                    {!isLoading && < form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="email"
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
                        <br />

                        <Button
                            sx={{ width: '75%', m: 1 }}
                            type="submit"
                            variant='contained'>Login</Button>
                        <br />
                        <Typography>Are you new? Please<NavLink to="/register"><Button variant="text">Register</Button></NavLink></Typography>
                    </form>}

                    {isLoading && <CircularProgress />}
                    {
                        user.email && <Alert severity="success">Successful login!</Alert>
                    }
                    {
                        authErrror && <Alert severity="error">{authErrror}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container >
    );
};

export default Login;