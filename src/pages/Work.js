import React from "react";
import "./css/WorkStyles.css";
import { motion } from "framer-motion";
import { Typography, } from "@material-ui/core";
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import jovisidhudev from "./jovisidhudev.js";
import togospice from "./togospice.js";
import pokedex from "./pokedex.js";
import trout62 from "./trout62.js";
import clever from "./clever.js";
 
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: 50,
    marginBottom: "100px",
    flexGrow: 1,
    position: "relative",
  },
  paper: {
    color: "#d3d3d3",
  }, 
  containerHost: {
    marginTop: 25,
    justifyContent: "center", 
    alignItems: "center", 
    flexFlow: "row wrap",
    display: "flex",
    position: "relative",
  },
  container: {
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  containerElement: {
    margin: "5px",
    width: "250px",
    height: "150px",
    marginRight: "65px",
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      width: "250px",
      height: "50px",
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
    borderRadius: "10px",
  },
  elementText: {
    paddingTop: "100px",
    paddingLeft: "15px",
    color: "white",
    margin: "auto",
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      paddingTop: "5px",
    },
  },
}));

let bodyTheme = createMuiTheme({
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

function Work() {
  const classes = useStyles();

  const hover = {
      variantA: { scale: 1.5 },
      variantB: { scale: 5 },
      variantC: { opacity: 1, transition:{duration: 0.75}}
  }

  return(
    <div className={classes.gridContainer}>
      <ThemeProvider theme={bodyTheme}>
        <Router>
          <div className={classes.containerHost} >
              <Link to="/work/jovisidhudev" style={{ textDecoration: "none", color: 'black'}}>
                <motion.div
                  className={classes.containerElement}
                  variants={hover}
                  whileHover={"variantA"}
                  initial={{ opacity: 0 }}
                  animate={"variantC"}
                  size={150}
                  radius={30}
                  style={{backgroundColor: "#000000"}}
                >
                  <Typography className={ classes.elementText } variant="h1">
                    jovisidhu.dev
                  </Typography>
                </motion.div>
              </Link>
              <Link to="/work/trout62" style={{ textDecoration: "none", color: 'black'}}>
                <motion.div
                className={classes.containerElement}
                variants={hover}
                whileHover={"variantA"}
                initial={{ opacity: 0 }}
                animate={"variantC"}
                size={150}
                radius={30}
                style={{backgroundColor: "#BFB064"}}
                >
                  <Typography className={classes.elementText} variant="h1">
                    Trout 62
                  </Typography>
                </motion.div>
              </Link>
              <Link to="/work/togospice" style={{ textDecoration: "none", color: 'black'}}>
                <motion.div
                className={classes.containerElement}
                variants={hover}
                whileHover={"variantA"}
                initial={{ opacity: 0 }}
                animate={"variantC"}
                size={150}
                radius={30}
                style={{backgroundColor: "#0B484F"}}
                >
                  <Typography className={classes.elementText} variant="h1">
                    TOGOSPICE
                  </Typography>
                </motion.div>
              </Link>
              <Link to="/work/pokedex" style={{ textDecoration: "none", color: 'black'}}>
                <motion.div
                className={classes.containerElement}
                variants={hover}
                whileHover={"variantA"}
                initial={{ opacity: 0 }}
                animate={"variantC"}
                size={150}
                radius={30}
                style={{backgroundColor: "#e0242f"}}
                >
                  <Typography className={classes.elementText} variant="h1">
                    pokedex
                  </Typography>
                </motion.div>
              </Link>
              <Link to="/work/clever" style={{ textDecoration: "none", color: 'black'}}>
                <motion.div
                className={classes.containerElement}
                variants={hover}
                whileHover={"variantA"}
                initial={{ opacity: 0 }}
                animate={"variantC"}
                size={150}
                radius={30}
                style={{backgroundColor: "#fe5b5b"}}
                >
                  <Typography className={classes.elementText} variant="h1">
                    Clever
                  </Typography>
                </motion.div>
              </Link>
          </div>
          <Route exact path="/work/jovisidhudev" component={jovisidhudev} />
          <Route exact path="/work/pokedex" component={pokedex} />
          <Route exact path="/work/togospice" component={togospice} />
          <Route exact path="/work/trout62" component={trout62} />
          <Route exact path="/work/clever" component={clever} />
        </Router>
      </ThemeProvider>
    </div>
  );
}
 
export default Work;