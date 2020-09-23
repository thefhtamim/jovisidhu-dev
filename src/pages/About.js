import React from "react";
import { Avatar, makeStyles, Box, Typography }from '@material-ui/core';
import avatarImage from '../assets/avatarImage.png';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
 
const useStyles = makeStyles(theme => ({
  text: {
    fontFamily: 'proxima-nova',
    fontSize: 20,
    fontWeight: "fontWeightBold",

    flexGrow: 1,
    textAlign: 'left',
    paragraph: true,
    noWrap: false,
    lineHeight: "25px",
  },
  containerText: {
    marginRight: "65px",
    minWidth: "200px",
  },
  containerImage: {

  },
  containerHost: {
    marginTop: "60px",
    justifyContent: "center", 
    alignItems: "center", 
    display: "flex"
  },
}));

let aboutTheme = createMuiTheme({
  shadows: ["none"],
  typography: {
      h1: {
          fontFamily: 'proxim-nova',
          fontSize: 90,
      },
      h3: {
          fontFamily: 'proxima-nova',
          fontSize: 22,
          fontWeight: "fontWeightBold",
      },
      h6: {
          fontFamily: 'proxima-nova',
          fontSize: 30,
      },
      "fontStyle": 'italic',
      primaryColor: '#d3d3d3',
  },
})

aboutTheme = responsiveFontSizes(aboutTheme);

function About() {
    const classes = useStyles();

    return (
      <div>
        <ThemeProvider theme={aboutTheme}>
          <link rel="stylesheet" href="https://use.typekit.net/dau4ouf.css" />
          <flexbox className={classes.containerHost}>
            <Box className={classes.containerText} style={{width: 500, height: 500}}>
              <Typography variant="h1" className={classes.text}>
              I am Jovi Sidhu, a native of Vancouver, and a semester away
              from completing my Bachelors at McGill University in Biology and Computer Science.
              <br></br>
              <br></br>
              I am currently looking for job opportunities in and around BC in front end development end test. 
              If you are interested in hiring me, please check out my LinkedIn for more information and to get in touch!
              <br></br>
              <br></br>
              I am passionate about designing UI/UX from the inside out, from the wireframe and graphic design to the front-end programming. 
              I have spent the last summer bolstering my understanding of the latest front end technologies and tools such as React.js, React Router, framer-motion, and a lot of JavaScript, 
              which I have practiced through creating several React applications (even this website is a React App!), you can check out the code for this site and rest of my projects on my GitHub.
              </Typography>
            </Box>
            <Box className={classes.containerImage}>
              <Avatar variant="square" alt="Jovi-Sidhu" src={avatarImage} style={{height: 520, width: 400}}/>
            </Box>
          </flexbox>
        </ThemeProvider>
      </div>
    );
}
 
export default About;