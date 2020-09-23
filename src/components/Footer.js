import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, LinkedIn, Instagram }  from '@material-ui/icons';
import styles from './Footer.module.css';
import { Toolbar, Box } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        top: 'auto',
        bottom: 0,
        width: "100%",
        position: 'fixed',
        height: "100px",
        backgroundColor: "white",
    },
    signature: {
            fontFamily: 'proxima-nova',
            fontSize: 15,
            fontWeight: "fontWeightBold",

            flexGrow: 1,
            top: 'auto',
            bottom: 5,
            width: "100%",
            position: 'fixed',
            height: "150",
            margin: "auto",
            marginLeft: "auto",
            [theme.breakpoints.down('xs')]: {
                fontSize: 0,
              },
    },
}));



function Footer() {
    const classes = useStyles();

    return(
        <div>
            <link rel="stylesheet" href="https://use.typekit.net/dau4ouf.css"/>

            <div display="block">
                <Toolbar className={classes.root}>
                    <Box style={{flex: 1}}></Box>
                    <GitHub className={styles.githubIcon} onClick={() => window.open("https://github.com/Mal-Jovi/", " _blank")}></GitHub>
                    <LinkedIn className={styles.infoIcon} onClick={() => window.open("https://www.linkedin.com/in/jovi-sidhu/", " _blank")}></LinkedIn>
                    <Instagram className={styles.infoIcon} onClick={() => window.open("https://www.instagram.com/maljovi/", " _blank")}></Instagram>
                    <Box style={{flex: 1}}></Box>
                </Toolbar>
            </div>
            <Box style={{flex: 1}}></Box>
            <h4 className={classes.signature}>
                Made by Jovi using React.js, framer-motion, Material-UI and 🧃.
            </h4>
            <Box style={{flex: 1}}></Box>
        </div>
    );
}

export default Footer;