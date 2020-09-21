import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, LinkedIn, Instagram }  from '@material-ui/icons';
import styles from './Footer.module.css';
import {Toolbar, Box } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        top: 'auto',
        bottom: 40,
        width: "100%",
        background: '#FFFFFF',
        position: 'fixed',
        height: "150",
    },
}));


function Footer() {
    const classes = useStyles();

    return(
        <div display="block">
            <Toolbar className={classes.root}>
                <Box style={{flex: 1}}></Box>
                <GitHub className={styles.githubIcon} onClick={() => window.open("https://github.com/Mal-Jovi/", " _blank")}></GitHub>
                <LinkedIn className={styles.infoIcon} onClick={() => window.open("https://www.linkedin.com/in/jovi-sidhu/", " _blank")}></LinkedIn>
                <Instagram className={styles.infoIcon} onClick={() => window.open("https://www.instagram.com/maljovi/", " _blank")}></Instagram>
                <Box style={{flex: 1}}></Box>
            </Toolbar>
        </div>
    );
}

export default Footer;