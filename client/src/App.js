import React from 'react';
import { Container} from '@material-ui/core';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
    return ( 
        <Router>
         <Container maxWidth="lg" backgroundColor='red'>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/auth" exact element={<Auth/>}/>
                <Route path ="/undefined" exact element={<Home/>}/>
            </Routes>
        </Container>
        </Router>
     );
}
 
export default App;