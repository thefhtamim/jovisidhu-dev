import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, LinkedIn, Instagram }  from '@material-ui/icons';
import styles from './Footer.module.css';
import { Toolbar, Box, Container } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        bottom: 0,
        width: "100%",
        position: 'relative',
        height: "100px",
        backgroundColor: "transparent",
        margin: "auto",
        padding: 0,
    },
    signature: {
        fontFamily: 'proxima-nova',
        fontSize: 15,
        fontWeight: "fontWeightBold",

        flexGrow: 1,
        bottom: 0,
        width: "100%",
        position: 'relative', 
        height: "150",
        margin: "auto",
        marginLeft: "auto",
        [theme.breakpoints.down('xs')]: {
            fontSize: 0,
            },
    },
    expander: {
        flex: 1,
        position: "relative",
        width: "100px",
        height: "100px",
        overflow: "auto",
    },
    section: {
        display: "flex",
        flexDirection: "column",
    },
    flexer: {
        flex: 1,
        minWidth: "25vw",
        [theme.breakpoints.down('xs')]: {
            minWidth: "25vw",
            },
    },
}));



function Footer() {
    const classes = useStyles();

    return(
        <div className={classes.section}>
            <link rel="stylesheet" href="https://use.typekit.net/dau4ouf.css"/>
            <Container className={classes.expander}></Container>
            <Toolbar className={classes.root}>
                <Box className={styles.flexer}></Box>
                <GitHub className={styles.githubIcon} onClick={() => window.open("https://github.com/Mal-Jovi/", " _blank")}></GitHub>
                <LinkedIn className={styles.infoIcon} onClick={() => window.open("https://www.linkedin.com/in/jovi-sidhu/", " _blank")}></LinkedIn>
                <Instagram className={styles.infoIcon} onClick={() => window.open("https://www.instagram.com/maljovi/", " _blank")}></Instagram>
                <Box style={{flex: 1}}></Box>
            </Toolbar>
        </div>
    );
}

export default Footer;