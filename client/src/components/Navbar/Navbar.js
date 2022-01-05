import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Toolbar, Typography, Button} from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';


const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const logout = () => {
        dispatch({type: "LOGOUT", data: user})
        navigate('/')
        setUser(null);
    }
    return ( 
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center" >Logan Farmer</Typography>
            <div className={classes.networking}>
                <FaGithubSquare size={35}/>
                <FaLinkedin size={35}/>
            </div>
        </div>
        <Toolbar className={classes.toolbar}>
            
            {user ? (
                <div className={classes.profile}>
                    <Button variant="contained" className={classes.logout} onClick={logout}>Logout</Button>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>  
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" >Login</Button>
            )}

        </Toolbar>
    </AppBar> 
    );
}
 
export default Navbar;