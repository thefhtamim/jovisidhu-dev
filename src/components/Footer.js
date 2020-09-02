import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { GitHub, LinkedIn, Instagram }  from '@material-ui/icons';
import styles from './Footer.module.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginLeft: 35,
        marginBottom: 10,
        marginTop: 10,
        top: 'auto',
        bottom: 0,
        width: "100%",
        background: '#FFFFFF',
        position: 'fixed',
        height: "150px",
    },
    paper: {
        height: 100,
        width: 100,
        direction: "column",
        alignItems: "center",
        justify: "center",
        backgroundColor: "#FFFFFF",
    },
}));


function Footer() {
    const classes = useStyles();

    return(
        <div display="block">
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={"10px"}>
                    <Grid container  spacing={1} className={styles.leftAlign}>
                        <Grid key={1} item xs>
                            <Paper className={classes.paper} elevation={0}>
                                <GitHub className={styles.githubIcon} onClick={() => window.open("https://github.com/Mal-Jovi/", " _blank")}></GitHub>
                            </Paper>
                        </Grid>
                        <Grid key={2} item xs>
                            <Paper className={classes.paper} elevation={0}>
                                <LinkedIn className={styles.infoIcon} onClick={() => window.open("https://www.linkedin.com/in/jovi-sidhu/", " _blank")}></LinkedIn>
                            </Paper>
                        </Grid>
                        <Grid key={3} item xs>
                            <Paper className={classes.paper} elevation={0}>
                                <Instagram className={styles.infoIcon} onClick={() => window.open("https://www.instagram.com/maljovi/", " _blank")}></Instagram>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;