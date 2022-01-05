import React from 'react'
import useStyles from './styles';
import { Paper, Typography, Grid } from '@material-ui/core';
import { DiHtml5, DiJavascript1, DiJava, DiPython, DiMongodb, DiCss3, DiReact, DiTerminal, DiStackoverflow} from 'react-icons/di';
import { SiAdobepremierepro, SiTypescript } from 'react-icons/si';

const Skills = () => {
    const classes = useStyles();
    return (

        <Paper className={classes.paper}>
            <div className={classes.headers}>
                <Typography variant="h6">Skills</Typography>
            </div>
            <Grid container justifyContent="space-evenly" direction="column">
                <Grid item xs={12} md={12}>
                    <div className={classes.headers}>
                        <DiJavascript1 size={60}/>
                        <DiReact size={60}/>
                        <DiJava size={60}/>
                        <DiPython size={60}/>
                        <div className={classes.ts}>
                            <SiTypescript size={45}/>
                        </div>
                        <DiMongodb size={60}/>
                        <DiCss3 size={60}/>
                        <DiHtml5 size={60}/>
                        <DiTerminal size={60}/>
                        {/* <DiStackoverflow size={60}/> */}
                        
                    </div>
                </Grid>
                
            </Grid>
            
        </Paper>
    )
}

export default Skills
