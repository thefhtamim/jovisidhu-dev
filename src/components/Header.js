import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Button, Typography, Toolbar, Box } from '@material-ui/core';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Landing from '../pages/Landing';
import Work from '../pages/Work';
import About from '../pages/About';
import image from '../assets/artboard1.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(5),
        backgroundColor: 'transparent',
        [headerTheme.breakpoints.down('xs')]: {
            marginRight: theme.spacing(1),
          },
    },
    menuIcon: {
        marginTop: 20,
        [headerTheme.breakpoints.down('xs')]: {
            height: 60,
            widht: 60,
          },
        "&:hover": {
        backgroundColor: "transparent"
        },
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        fontSize: 22,
        marginTop: 10,
        [headerTheme.breakpoints.down('xs')]: {
            fontSize: 15,
            marginTop: 12,
            marginRight: theme.spacing(1),
          },
    },
}));

let headerTheme = createMuiTheme({
    shadows: ["none"],
    typography: {
        fontFamily: '"proxima-nova", sans-serif',
        h3: {
            fontFamily: 'proxima-nova',
            fontSize: 22,
            fontWeight: "fontWeightBold",
        },
    },
})

const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 1} },
    closed: { opacity: 0, x: "-100%", transition: { duration: 1 } }
}

function Header() {
    const classes = useStyles();



    return (
        <div>
            <link rel="stylesheet" href="https://use.typekit.net/dau4ouf.css"/>
            <BrowserRouter>
                <div className="navigation">
                    <div className="navigation-sub">
                        <ThemeProvider theme={headerTheme}>
                            <Toolbar>
                                <Link to="/" className="item">
                                    <img className={classes.menuIcon} src={image} height={100} width={100} />
                                </Link>
                                <Box style={{flex: 1, minWidth: 10}}></Box>
                                <Button className={classes.menuButton}>
                                    <Link to="/work" className="item" style={{ textDecoration: 'none', color: 'black'}}>
                                        <Typography variant="h3" className={classes.title} >
                                            work
                                        </Typography>
                                    </Link>
                                </Button>
                                <Button className={classes.menuButton}>
                                    <Typography variant="h3" className={classes.title} onClick={() => window.open("https://drive.google.com/file/d/1RDuH2kjIGr8oiNyONvpTD3yOV0QOtQJ6/view?usp=sharing", " _blank")}>
                                        resume
                                    </Typography>
                                </Button>
                                <Button className={classes.menuButton}>
                                    <Link to="/about" className="item" style={{ textDecoration: 'none', color: 'black'}}>
                                        <Typography variant="h3" className={classes.title}>
                                            about
                                        </Typography>
                                    </Link>
                                </Button>
                                <Box style={{flex: 1}}></Box>
                            </Toolbar>
                        </ThemeProvider>
                    </div>
                    <div className="page-body">
                        <Route exact path="/" component={Landing} />
                        <Route path="/work" component={Work} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Header;