import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(5),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
}));

const headerTheme = createMuiTheme({
    shadows: ["none"],
    typography: {
        fontFamily: '"proxima-nova", sans-serif',
    },
})

function Header() {
    const classes = useStyles();

    return (
        <div>
            <link rel="stylesheet" href="https://use.typekit.net/dau4ouf.css"/>
            <ThemeProvider theme={headerTheme}>
                <AppBar position="static" style={{ backgroundColor: "white", color: "black"}} >
                    <Toolbar>
                        <Button className={classes.menuButton}>
                            <Typography variant="h3" className={classes.title} >
                                WORK 
                            </Typography>
                        </Button>
                        <Button className={classes.menuButton}>
                            <Typography variant="h3" className={classes.title} onClick={() => window.open("https://drive.google.com/file/d/1RDuH2kjIGr8oiNyONvpTD3yOV0QOtQJ6/view?usp=sharing", " _blank")}>
                                RESUME
                        </Typography>
                        </Button>
                        <Button className={classes.menuButton}>
                        <Typography variant="h3" className={classes.title}>
                            ABOUT
                        </Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            <Divider />
        </div>
    );
}

export default Header;