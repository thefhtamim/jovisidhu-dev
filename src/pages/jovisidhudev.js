import React from 'react';
import { motion } from "framer-motion";
import { Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import image from '../assets/artboard1.svg';
 

const useStyles = makeStyles((theme) => ({
  containerElement: {
    margin: "5px",
    width: "63vw",
    height: "40vh",
    
    marginRight: "65px",

    border: "solid",
    borderColor: "black",
    borderRadius: "20px",
    borderWidth: "5px",

    backgroundColor: "transparent",

    overflow: "hidden",
    [theme.breakpoints.down('xs')]: {
      width: "90vw",
      height: "60vh",
      },
    },
    elementText: {
      paddingTop: "10px",
      paddingLeft: "15px",
      paddingRight: "15px",
      color: "black",
      margin: "auto",
      overflow: "wrap",
    },
    hostContainer: {
      justifyContent: "center",
      alignItems: "center", 
      display: "flex",
      flexFlow: "column wrap",
      marginTop: "50px",
    },
    innerContainer: {
      justifyContent: "flex-start",
    },
    subtitle: {
      marginLeft: "15px",
      fontSize: "20px",
    },
    menuIcon: {
      marginLeft: "15px",
      marginTop: "25px",
    }
}));

let mainTheme = createMuiTheme({
  shadows: ["none"],
  typography: {
      fontFamily: '"proxima-nova", sans-serif',
      h1: {
          fontFamily: 'proxima-nova',
          fontSize: 35,
          fontWeight: "fontWeightBold",
      },
  },
})

mainTheme = responsiveFontSizes(mainTheme);

function Jovisidhudev() {

  const classes = useStyles();

  const inner = {
    entry: { transition:{duration: 0.9}, opacity: 1 },
  }

    return (
      <div className={classes.hostContainer}>
        <div className={classes.innerContainer}>
          <Typography className={classes.subtitle}>jovisidhudev</Typography>
          <motion.div
            className={classes.containerElement}
            variants={inner}
            initial={{opacity: 0}}
            animate={"entry"}
            size={150}
            radius={30}
          >
            <Typography className={classes.elementText}>
              This page is currently underconstruction! I'm probably working on it right now!
              <br></br>
              <br></br>
              This focus of this project was to create a website that displayed my understanding of efficient design layouts and modern
              front-end development design principles.

              The site had to be easy to navigate, visually appealling, mobile friendly, and had to be built using a modern front end frameworks and web development packages.
              <br></br>
              <br></br>
              The site is a React.js aplication made using HTML, CSS, Javascript, react-router for dynamically loading in components, material-UI for quickly setting up capable components, and framer-motion for the animations.
            </Typography>
            <img className={classes.menuIcon} src={image} alt="jovi_logo" height={100} width={100} />
          </motion.div>
        </div>
      </div>
    );
}
 
export default Jovisidhudev;