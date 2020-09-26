import React from "react";
import { useState } from "react";
import "./css/WorkStyles.css";
import { motion } from "framer-motion";
import { Typography, } from "@material-ui/core";
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import jovisidhudev from "./jovisidhudev.js";
import togospice from "./togospice.js";
import pokedex from "./pokedex.js";
import trout62 from "./trout62.js";
 
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: 50,
    flexGrow: 1,
  },
  paper: {
    color: "#d3d3d3",
  },
  containerHost: {
    marginTop: 25,
    justifyContent: "center", 
    alignItems: "center", 
    display: "flex"
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
  }

  const [isVisible, setIsVisible] = useState(false);

  return(
    <div className={classes.gridContainer}>
      <ThemeProvider theme={bodyTheme}>
        <Router>
          <flexbox className={classes.containerHost} >
            <flexbox className={classes.container}>
              <Link to="/work/jovisidhudev" style={{ textDecoration: "none", color: 'black'}}>
                <motion.div
                  className={classes.containerElement}
                  variants={hover}
                  whileHover={"variantA"}
                  size={150}
                  radius={30}
                  style={{backgroundColor: "#000000"}}
                >
                  <Typography className={ classes.elementText } variant="h1">
                    jovisidhu.dev
                  </Typography>
                </motion.div>
              </Link>
              <Link to="/work/pokedex" style={{ textDecoration: "none", color: 'black'}}>
                <motion.div
                className={classes.containerElement}
                variants={hover}
                whileHover={"variantA"}
                size={150}
                radius={30}
                style={{backgroundColor: "#FF5656"}}
                >
                  <Typography className={classes.elementText} variant="h1">
                    pokedex
                  </Typography>
                </motion.div>
              </Link>
              <Link to="/work/togospice" style={{ textDecoration: "none", color: 'black'}}>
                <motion.div
                className={classes.containerElement}
                variants={hover}
                whileHover={"variantA"}
                size={150}
                radius={30}
                style={{backgroundColor: "#0B484F"}}
                >
                  <Typography className={classes.elementText} variant="h1">
                    TOGOSPICE
                  </Typography>
                </motion.div>
              </Link>
              <Link to="/work/trout62" style={{ textDecoration: "none", color: 'black'}}>
                <motion.div
                className={classes.containerElement}
                variants={hover}
                whileHover={"variantA"}
                size={150}
                radius={30}
                style={{backgroundColor: "#BFB064"}}
                >
                  <Typography className={classes.elementText} variant="h1">
                    Trout 62
                  </Typography>
                </motion.div>
              </Link>
            </flexbox>
          </flexbox>
          <Route exact path="/work/jovisidhudev" component={jovisidhudev} />
          <Route exact path="/work/pokedex" component={pokedex} />
          <Route exact path="/work/togospice" component={togospice} />
          <Route exact path="/work/trout62" component={trout62} />
        </Router>
      </ThemeProvider>
    </div>
  );
}
 
export default Work;