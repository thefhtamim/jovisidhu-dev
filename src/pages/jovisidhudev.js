import React from 'react';
import { motion } from "framer-motion";
import { Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
 

const useStyles = makeStyles((theme) => ({
  containerElement: {
    margin: "5px",
    width: "250px",
    height: "150px",
    marginRight: "65px",
    },
    elementText: {
      paddingTop: "100px",
      paddingLeft: "15px",
      color: "white",
      margin: "auto",
    },
    hostContainer: {
      justifyContent: "center",
      alignItems: "center", 
      display: "flex",
      flexFlow: "column wrap",
    },
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

  const hover = {
    variantA: { scale: 1.5 },
    variantB: { scale: 5 },
  }

    return (
      <div className={classes.hostContainer}>
        <h2>jovisidhudev</h2>
        <motion.div
          className={classes.containerElement}
          variants={hover}
          whileHover={"variantA"}
          size={150}
          radius={30}
          style={{backgroundColor: "#000000"}}
        >
          <Typography className={classes.elementText}>This page is currently underconstruction! I'm probably working on it right now!</Typography>
        </motion.div>
      </div>
    );
}
 
export default Jovisidhudev;