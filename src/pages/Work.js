import React from "react";
import "./css/WorkStyles.css";
import { motion } from "framer-motion";
import { Typography, Box } from "@material-ui/core";
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
 
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
    marginTop: "100px",
    marginLeft: "15px",
    color: "white",
    margin: "auto",
  }
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
      variantA: { scale: 1.5, backgroundColor: "#d3d3d3" },
  }

  return(
    <div className={classes.gridContainer}>
      <ThemeProvider theme={bodyTheme}>
        <flexbox className={classes.containerHost} >
          <flexbox className={classes.container}>
            <motion.div
            className={classes.containerElement}
            variants={hover}
            whileHover={"variantA"}
            size={150}
            radius={30}
            style={{backgroundColor: "#000000"}}
            >
              <Typography className={classes.elementText} variant="h1">
                jovisidhu.dev
              </Typography>
            </motion.div>
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
          </flexbox>
        </flexbox>
        <Box className={classes.container}>
          <Typography style={{color: "red", marginTop: "100px"}} variant="h1">
                  This page is underconstruction, the buttons currently don't redirect anywhere! AAAH!
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}
 
export default Work;