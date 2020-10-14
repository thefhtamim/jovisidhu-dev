import React from 'react';
import { motion } from "framer-motion";
import { Typography } from '@material-ui/core';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import daycon from '../assets/daycon.png';
import tazumi from '../assets/tazumi.png';
import prochnost from '../assets/prochnost.png';
 

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
      marginLeft: "27px",
      fontSize: "20px",
      fontWeight: "bold",
      maxWidth: "80vw",
      color: "#fe5b5b",
    },
    menuIcon: {
      marginLeft: "15px",
      marginTop: "25px",
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

function Clever() {

  const classes = useStyles();

  const inner = {
    entry: { transition:{duration: 0.9}, opacity: 1 },
  }

    return (
      <div className={classes.hostContainer}>
        <div className={classes.innerContainer}>
          <Typography className={classes.subtitle}>Clever - Independently developed game made using Unity</Typography>
          <motion.div
            className={classes.containerElement}
            variants={inner}
            initial={{opacity: 0}}
            animate={"entry"}
            size={150}
            radius={30}
          >
            <Typography className={classes.elementText}>
              This project is a game I am developing Independently using the Unity game engine. The majority of the game logic is programmed using C#, and the aim of the UI is to try creating it using react.js.
              <br></br>
              <br></br>
              I am a registered Steamworks game developer, enabling me to eventually launch my game on the Steam game distriubtion platform. 
              The game is more of a hobby project to keep me practising object oriented programming and design patterns. 
              The goal is to have a published demo running on Steam in Feburary.
              <br></br>
              <br></br>
              The idea for the game is a FPS rogue-lite, where you play as a corporate spy breaking into different made-up companies in a cyberpunk world.
              I have desinged a few logos for these fictional companies, the concepts for which are below. All of which were designed to look very industrial, and very corporate, while also trying to look like real logos of an actual company, 
              rather than overly fictious. The inspiration are the logos for companies in movies like Blade Runner, and in Aliens.
              <img className={classes.imageLarge} src={daycon} alt="jovi_logo"/>
              DAYCON is an American Robotics Company. The design is based on the very whimsical concept logo that microsoft first used which involved letters within letters.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <img className={classes.imageLarge} src={tazumi} alt="jovi_logo"/>
              Tazumi is a Japanese electronics company. The design is heavily inspired by SONY's design language in the 1980s.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <img className={classes.imageLarge} src={prochnost} alt="jovi_logo"/>
              Prochnost is a modern, Russian automotive company. The design is an amalgamation of different aspects of several car companies, with the color scheme taken from the Russian flag.
              <br></br>
              <br></br>
            </Typography>
          </motion.div>
        </div>
      </div>
    );
}
 
export default Clever;