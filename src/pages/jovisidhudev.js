import React from 'react';
import { motion } from "framer-motion";
import { Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import siteLogo from '../assets/artboard1.svg';
import logoDrafts from '../assets/logo_drafts.png';
 

const useStyles = makeStyles((theme) => ({
  containerElement: {
    margin: "5px",
    width: "45vw",

    border: "solid",
    borderColor: "transparent",
    borderRadius: "20px",
    borderWidth: "5px",

    backgroundColor: "transparent",
    boxShadow: "100px",

    overflow: "hidden",
    [theme.breakpoints.down("1200")]: {
      width: "90vw",
      },
    },
    elementText: {
      paddingTop: "10px",
      paddingLeft: "15px",
      paddingRight: "15px",
      color: "black",
      margin: "auto",
      overflow: "wrap",
      fontSize: "20px",
    },
    hostContainer: {
      justifyContent: "center",
      alignItems: "center", 
      display: "flex",
      flexFlow: "column noWrap",
      marginTop: "50px",
    },
    innerContainer: {
      justifyContent: "flex-start",
    },
    subtitle: {
      marginLeft: "30px",
      marginRight: 0,
      fontSize: "20px",
      fontWeight: "bold",
      maxWidth: "80vw",
    },
    image: {
      marginTop: "25px",
      display: "block",
    },
    imageLarge: {
      marginTop: "25px",
      display: "block",
      width: "45vw",
      [theme.breakpoints.down("645")]: {
        width: "90vw",
        },
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
          <ThemeProvider theme={mainTheme}>
            <Typography className={classes.subtitle}>jovisidhudev - Personal Portfolio Website</Typography>
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
                <br></br>
                <br></br>
                I first used Adobe XD in order to get a feel for the layout I had in mind and to rapidly try restructing elements, changing styling and fonts. The prototype is available here: 
                <Typography className={classes.elementText} style={{color: "blue", marginLeft: "-15px", fontWeight: "bold"}} onClick={() => window.open("https://xd.adobe.com/view/65e7d38d-e495-4e91-a819-2ee12ddcc99b-30b4/", " _blank")}>
                  jovisidhu.dev - Adobe XD 
                </Typography>
                <br></br>
                Below are numerous concepts for the logo of this site, I select many possible candidate fonts from the adobe fonts library, and then iterated between different fonts, font weights and positioning until I landed on 
                something visually striking and bold.
                <img className={classes.imageLarge} src={logoDrafts} alt="logo_drafts"/>
                <br></br>
                <br></br>
                Below is the final design I landed on, which is the current site logo.                
                <br></br>
                <img className={classes.image} src={siteLogo} alt="jovi_logo" height={100} width={100} />
              </Typography>
            </motion.div>
          </ThemeProvider>
        </div>
      </div>
    );
}
 
export default Jovisidhudev;