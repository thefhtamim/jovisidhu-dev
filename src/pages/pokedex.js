import React from 'react';
import { motion } from "framer-motion";
import { Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import image from '../assets/artboard1.svg';
 

const useStyles = makeStyles((theme) => ({
  containerElement: {
    margin: "5px",
    width: "45vw",
    border: "solid",
    borderColor: "transparent",
    borderRadius: "20px",
    borderWidth: "5px",

    backgroundColor: "transparent",

    overflow: "hidden",
    [theme.breakpoints.down("645")]: {
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
      fontSize: "1vw",
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
      marginLeft: "30px",
      fontSize: "20px",
      color: "#FF5656",
      fontWeight: "bold",
      maxWidth: "80vw",
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

function Pokedex() {

  const classes = useStyles();

  const inner = {
    entry: { transition:{duration: 0.9}, opacity: 1 },
  }

    return (
      <div className={classes.hostContainer}>
        <div className={classes.innerContainer}>
          <Typography className={classes.subtitle}>pokedex - Visual Pokemon Dictionary</Typography>
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
              The focus of this project was to get familiar with the basic fundamentals of creating a site using several compoenents, as well as an exercise in interacting with a RESTful API, fetching information and displaying it pleasantly.
              In this case the footer, header, body and left panel are all seperate components, which makes the workflow much easier as the amount of code in each js file strictly relates to that component and minimizes the amount of code to read through.
              <br></br>
              <br></br>
              The RESTful API being used is the pokeAPI which is a publicly accessible, open-source database of pokemon information and a wonderful API to use to practise extracting and displaying information.
              <br></br>
              <br></br>
              The site's components are modified from the material-UI front end framework.
            </Typography>
          </motion.div>
        </div>
      </div>
    );
}
 
export default Pokedex;