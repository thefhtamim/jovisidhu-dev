import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, LinkedIn, Instagram }  from '@material-ui/icons';
import styles from './Footer.module.css';

const useStyles = makeStyles(theme => ({
    root: {
        bottom: 0,
        backgroundColor: "transparent",
        margin: 0,
        padding: 0,

        justifyContent: "center", 
        alignItems: "center", 
        display: "flex",
        position: "relative",
        flexFlow: "row nowrap",
        marginBottom: "40px",
    },
}));

function Footer() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <link rel="stylesheet" href="https://use.typekit.net/dau4ouf.css"/>
            <GitHub className={styles.githubIcon} onClick={() => window.open("https://github.com/Mal-Jovi/", " _blank")}></GitHub>
            <LinkedIn className={styles.infoIcon} onClick={() => window.open("https://www.linkedin.com/in/jovi-sidhu/", " _blank")}></LinkedIn>
            <Instagram className={styles.instagramIcon} onClick={() => window.open("https://www.instagram.com/maljovi/", " _blank")}></Instagram>
        </div>
    );
}

export default Footer;