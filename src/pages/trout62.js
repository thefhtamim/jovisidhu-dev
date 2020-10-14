import React from 'react';
import { motion } from "framer-motion";
import { Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
 

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
      color: "#BFB064",
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

function Trout62() {

  const classes = useStyles();

  const inner = {
    entry: { transition:{duration: 0.9}, opacity: 1 },
  }

    return (
      <div className={classes.hostContainer}>
        <div className={classes.innerContainer}>
          <ThemeProvider theme={mainTheme}>
            <Typography className={classes.subtitle}>Trout 62 - Luxury Vancouver Property Campaign</Typography>
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
                This focus of this project was to create a clear and recognizable brand for this multi-million dollar property development located on East 14th. The client Togospice Investments Ltd. whom I had
                worked with before, wanted to have a full marketing campaign for their project. This was the first time they had pursued doing any real marketing for their properties, and I worked with them to 
                outline with each stage of the project, different marketing campaigns to carry out. This included mailing flyers, property boards, large scale banners, and the center piece of the project which 
                was their website.
                <br></br>
                <br></br>
                The website, as well as the rest of the campaign, evolved constantly every few months as the property went from it's pre-sale phase to it's various stages of construction and finally to completion. The 
                biggest adjustment to the campaign involved the pandemic which involved numerous adjustments to the strategy that had been employed to drive attendance to the viewings of the property. The solution to which
                involved introducing as much tactile information on the site from a photoshoot of each property after having them stage with furniture, to the more advanced move of having all 3 properties having their interior 
                professionally 3D scanned to allow for virtual tours.
                <br></br>
                <br></br>
                The website's built in analytic tools informed the revisions to the site based on what aspects of the site were vistied the most or least, which improved traffic to the key areas of the site overtime with the each update. 
                <br></br>
                <br></br>
                The webstie for this project was created using squarespace.com, as to enable the client to have immediate access to editing the information on the site. This was necessary as 
                many small changes had various specification listed on the site had to be adjusted as various aspects of the properties were approved by the city. Had the design requirments been 
                more demanding or intricate, then a custom site would have been created and I would need to then create an interface for the client to easily interact with the text on the site.
                Given the client's desire to update the writtent content in the site frequently, squarespace's complete domain and site solution provided the best avenue for doing so.
              </Typography>
            </motion.div>
          </ThemeProvider>
        </div>
      </div>
    );
}
 
export default Trout62;