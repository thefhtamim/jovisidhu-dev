import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { motion } from "framer-motion";

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
        position: "relative",
    },
    textBox: {
        minWidth: "300px",
        minHeight: "200px",
        height: "100%",
        width: "30%",
        marginLeft: theme.spacing(4.25),
        display: "block",
        flex: "1 1 auto",
    },
    bodyContainer: {
        position: "relative",
        marginBottom: "250px",
        [theme.breakpoints.down('xs')]: {
            marginBottom: "140px",
            },
    }
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

    const landingEntry = {
        variantA: { opacity: 1, transition:{ duration: 1.4 }, x: 0 },
    }

    return (
        <div className={classes.bodyContainer}>
            <ThemeProvider theme={mainTheme}>
                <link rel="stylesheet" href="https://use.typekit.net/dau4ouf.css" />
                <motion.div
                    className={classes.containerElement}
                    variants={landingEntry}
                    initial={{ opacity: 0, x: -800 }}
                    animate={"variantA"}
                    style={{backgroundColor: "transparent"}}
                >
                    <Typography variant="h1" className={classes.main} style={{ top: 400}}>
                        Welcome to Arteon Records!
                    </Typography>
                    <br>
                    </br>
                    <Box className={classes.textBox} whiteSpace="normal">
                        <Typography variant="h4" className={classes.body}>
                            Free Music distribution Worldwide.
                            <br>
                            </br>
                               100% Independent Record Label 
                            <br>
                            </br> 
                            { /*TODO: There should be a way to isolate and change the color of a single word*/ }
                            Based in South Asia.
                        </Typography>
                    </Box>  
                </motion.div>
            </ThemeProvider>
        </div>
    );
}

export default Landing;
