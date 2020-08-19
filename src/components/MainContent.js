import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    main: {
        flexGrow: 1,
        textAlign: 'left',
        marginLeft: theme.spacing(3.5),
        paragraph: true,
    },
    body: {
        flexGrow: 1,
        textAlign: 'left',
        marginLeft: theme.spacing(4.25),
        paragraph: true,
    }
}));

const mainTheme = createMuiTheme({
    shadows: ["none"],
    typography: {
        "fontFamily": '"arya-singular", sans-serif',
        "fontStyle": 'italic',
        primaryColor: '#d3d3d3',
    },
})

function MainContent() {
    const classes = useStyles();
    return (
        <div>
        <ThemeProvider theme={mainTheme}>
            <link rel="stylesheet" href="https://use.typekit.net/dau4ouf.css" />
            <Typography variant="h1" className={classes.main} style={{ top: 40}}>
                I'm Jovi Sidhu
            </Typography>
            <br>
            </br>       
            <Typography variant="h6" className={classes.body} style={{ top: 40, width: 500, display: 'inline-block'}}>
                A Front End Developer from Vancouver with a passion for creating long lasting designs
                that stand out.
                <br>
                </br>
                <br>
                </br> 
                { /*TODO: There should be a way to isolate and change the color of a single word*/ }
                Check out myresume to learn about me, and check out my work 
                page to see what I have built.
            </Typography>
        </ThemeProvider>
        </div>
    );
}

export default MainContent;
