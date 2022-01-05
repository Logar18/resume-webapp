import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grow, Container, Grid} from '@material-ui/core'

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import { getPosts } from '../../actions/posts';
import Skills from '../Skills/Skills';

const Home = () => {
    const dispatch = useDispatch();
    const [currID, setCurrID] = useState(null);

    useEffect(() => {
        dispatch(getPosts())
    }, [currID, dispatch]);

    return ( 
        <Grow in>
            <Container>
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <Posts setCurrID={setCurrID}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>     
                        <Skills/>                  
                        <Form currID={currID} setCurrID={setCurrID}/>
                    </Grid>
                </Grid>
             </Container>
        </Grow>
     );
}
 
export default Home;