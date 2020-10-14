import React from 'react';
import { motion } from "framer-motion";
import { ThemeProvider, Typography } from '@material-ui/core';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
 

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
      flexFlow: "column wrap",
      marginTop: "50px",
    },
    innerContainer: {
      justifyContent: "flex-start",
    },
    subtitle: {
      marginLeft: "27px",
      fontSize: "20px",
      color: "#0B484F",
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

function Togospice() {

  const classes = useStyles();

  const inner = {
    entry: { transition:{duration: 0.9}, opacity: 1 },
  }

    return (
      <div className={classes.hostContainer}>
        <div className={classes.innerContainer}>
          <ThemeProvider theme={mainTheme}>
            <Typography className={classes.subtitle}>Togospice Investments Ltd. - Property Development Company</Typography>
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
                <br></br>
                <br></br>
              </Typography>
            </motion.div>
          </ThemeProvider>
        </div>
      </div>
    );
}
 
export default Togospice;