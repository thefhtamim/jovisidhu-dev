import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    main: {
        flexGrow: 1,
        textAlign: 'left',
        marginLeft: theme.spacing(3.5),
        marginRight: theme.spacing(3.5),
        marginTop: "35px",
        paragraph: true,
    },
    body: {
        flexGrow: 1,
        textAlign: 'left',
        paragraph: true,
        noWrap: false,
    },
    textBox: {
        minWidth: "300px",
        minHeight: "200px",
        height: "20%",
        width: "30%",
        marginLeft: theme.spacing(4.25),
        display: "block",
    },
}));

let mainTheme = createMuiTheme({
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

mainTheme = responsiveFontSizes(mainTheme);

function Landing() {
    const classes = useStyles();
    return (
        <div>
            <ThemeProvider theme={mainTheme}>
                <link rel="stylesheet" href="https://use.typekit.net/dau4ouf.css" />
                    <Typography variant="h1" className={classes.main} style={{ top: 400}}>
                    I'm Jovi Sidhu
                </Typography>
                <br>
                </br>
                <Box className={classes.textBox} whiteSpace="normal">
                    <Typography variant="h6" className={classes.body}>
                        A Front End Developer from Vancouver with a passion for creating long lasting designs
                        that stand out.
                        <br>
                        </br>
                        <br>
                        </br> 
                        { /*TODO: There should be a way to isolate and change the color of a single word*/ }
                        I am currently looking for entry positions in front end development and test.
                    </Typography>
                </Box>  
            </ThemeProvider>
        </div>
    );
}

export default Landing;