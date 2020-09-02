import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import footerCSS from './Footer.js';

const useStyles = makeStyles(theme => ({
    footerBar: {
        top: 'auto',
        bottom: 0,
        width: "100%",
        background: '#d3d3d3',
        position: 'fixed',
    },
    lia: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'block',
    },
    
}));


function Footer() {
    const classes = useStyles();

    return(
        <div>
            <AppBar className={classes.footerBar}>
                <ul id="container">
                    <li>
                        <a className="footerCSS" href="#">
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a class="rocket" href="#">
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a class="link" href="#">
                            <span></span>
                        </a>
                    </li>
                </ul>
            </AppBar>
        </div>
    );
}

export default Footer;