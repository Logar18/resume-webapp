import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LaptopChromebook from '@material-ui/icons/LaptopChromebook'
import { GoogleLogin } from 'react-google-login';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Input from './Input';
import Icon from './Icon';

const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin, setLogin] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        confirmPassword: "",
        });

    const [showPassord, setShowPassword] = useState(false);

    const handleSubmit = () => {
        console.log("Submitted");
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handleChange = (e) => {
        
    }
    
    const switchMode = () => {
        setLogin((prev) => !prev);
        handleShowPassword(false);
    }
    
    const googleSuccess = async (res) => {
        const result = res.profileObj;
        const token = res.tokenId;

        try 
        {
            dispatch({type: "AUTH", data: { result, token }});
            navigate('/');
        } 
        catch (error) 
        {
            console.log(error);
        }

        
    }

    const googleFailure = () => {
        console.log("google login failed");
    }

    return ( 
        <Container className="" component="main">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LaptopChromebook/>
                </Avatar>
                <Typography variant="h5">{isLogin ? 'Register' : 'Login'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isLogin && (
                                <>
                                    <Input name="firstname" label="First Name" onChange={handleChange} autoFocus half/>
                                    <Input name="lastname" label="Last Name" onChange={handleChange} half/>
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" onChange={handleChange} autoFocus={isLogin ? false : true}type="email" half />
                        <Input name="password" label="Password" onChange={handleChange} handleShowPassword={handleShowPassword} type={showPassord ? 'text' : 'password'} half/>
                        { isLogin && (
                            <>
                                <Input ame="confirmPassword" label="Re-enter password" onChange={handleChange} handleShowPassword={handleShowPassword} type={showPassord ? 'text' : 'password'} half/>
                            </>
                        )}
                    </Grid>
                    <GoogleLogin
                        clientId='1084054528386-ds05kdrjptn2tnmla9al1qnrjc30jajg.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button 
                                className={classes.googleButton} 
                                color="primary" 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<Icon/>} 
                                variant="contained">
                                    Login with Google
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isLogin ? 'Register' : 'Login'}</Button>
                    <Grid container justifyContent='center'>
                        <Grid item>
                            <Button onClick={switchMode}>{isLogin ? 'Already have an account? Login here' : `Don't have an account? Register here`}</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
     );
}
 
export default Auth;