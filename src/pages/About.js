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
    marginTop: "50px",
    minWidth: "200px",
    width: "500px",
    height: "500px",
    [theme.breakpoints.down("920")]: {
      height: "500",
      width: "300",
      marginLeft: 0,
    },
    padding: 0,
    marginLeft: "100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    order: 2,
  },
  containerImage: {
    order: 1,
    marginLeft: "0px",
    alignItems: "center",
  },
  containerHost: {
    marginTop: "60px",
    justifyContent: "center", 
    alignItems: "center", 
    display: "flex",
    marginLeft: "0px",
    [theme.breakpoints.down('xs')]: {
      marginLeft: "40px",
    },
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  avatar: {
    height: "520px",
    width: "400px",
    [theme.breakpoints.down('md')]: {
      height: "260",
      width: "200",
    },
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
            <flexbox className={classes.containerText}>
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
            </flexbox>
            <flexbox className={classes.containerImage}>
              <img className={classes.avatar} variant="square" alt="photo" src={avatarImage}/>
            </flexbox>
          </flexbox>
        </ThemeProvider>
      </div>
    );
}
 
export default About;