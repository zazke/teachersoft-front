import React from 'react'
// import './Navbar.css'
import LogoPucp from '../../../assets/Images/LogoPUCP.png'
import { makeStyles } from '@mui/styles'
import { AppBar, Toolbar, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#042354',
    },
    menuImagen: {
        position: 'relative',
        height: '40px'
    }
}))


export default function Navbar() {
    const classes = useStyles();

    return(
        <AppBar position="static" color="primary">
            <Toolbar>
                <Grid container
                    alignItems="center">
                    <Grid item sm>
                        <p>hola mundo sdfkdsf3334</p>
                    </Grid>
                    <Grid item>
                        <img className={classes.menuImagen} src= {LogoPucp} alt=""></img>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        
    )
}
