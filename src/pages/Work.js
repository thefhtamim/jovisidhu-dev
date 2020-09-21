import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Card, Box } from '@material-ui/core';
import "./css/WorkStyles.css";
import { motion } from "framer-motion";

import image from '../assets/artboard1.svg';
 
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
    backgroundColor: "#000000",
  },
}));

function Work() {
  const classes = useStyles();

  const hover = {
      variantA: { scale: 1.5, backgroundColor: "#d3d3d3" },
  }

  return(
    <div className={classes.gridContainer}>
      <flexbox className={classes.containerHost} >
        <flexbox className={classes.container}>
          <motion.div
          className={classes.containerElement}
          variants={hover}
          whileHover={"variantA"}
          size={150}
          radius={30}
          background={"#d3d3d3"}
          />
          <motion.div
          className={classes.containerElement}
          variants={hover}
          whileHover={"variantA"}
          size={150}
          radius={30}
          background={"#d3d3d3"}
          />
          <motion.div
          className={classes.containerElement}
          variants={hover}
          whileHover={"variantA"}
          size={150}
          radius={30}
          background={"#d3d3d3"}
          />
        </flexbox>
      </flexbox>
    </div>
  );
}
 
export default Work;