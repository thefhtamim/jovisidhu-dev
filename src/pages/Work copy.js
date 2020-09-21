import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Card, Box } from '@material-ui/core';
import "./css/WorkStyles.css";
import { AnimateSharedLayout } from "framer-motion";
 
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: 25,
    flexGrow: 1,
    direction: "row",
    justify: "center",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridElement: {

  },
}));

function Work() {
  const classes = useStyles();

  return(
    <div className="projects">
      <Card
      link=""
      image=""
      title=""
      category=""
      />

      <div className={classes.root}>
        <Box>
          <Grid container direction="row" justify="center" alignItems="center" className={classes.gridContainer} spacing={3}>
            <Grid item className={classes.gridElement}>
              <Paper className={classes.paper}>Personal Website</Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>Pokedex</Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>Trout 62</Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>Togospice Investments Ltd.</Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>Sidhu Realty</Paper>
            </Grid>
          </Grid>
        </Box>

      </div>
    </div>
  );
}
 
export default Work;