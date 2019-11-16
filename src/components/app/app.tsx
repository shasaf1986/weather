import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/styles';
import WeatherCard from '../weatherCard';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(
  createStyles({
    background: {
      minHeight: '100vh',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
  }),
);

export default function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Typography className={classes.background} component="div" >
        <Container >
          <Box display="flex" justifyContent="center" paddingTop="10px">
            <WeatherCard />
          </Box>
        </Container>
      </Typography>
    </Fragment>
  );
}
