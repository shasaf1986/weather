import { Card, CardContent, Typography, createStyles, makeStyles, CircularProgress, Box } from "@material-ui/core";
import React from 'react';
import Weather from "../../services/weatherData/models/weather";

const useStyles = makeStyles(
  createStyles({
    wrapper: {
      backgroundColor: 'rgba(255, 255, 255, 0.36)',
    },
    contentWrapper: {
      color: '#ffffff',
    },
    temperature: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }),
);

interface Props {
  isLoading: boolean;
  weather: Weather | undefined;
};

const WeatherCard: React.SFC<Props> = ({ isLoading, weather }) => {
  const classes = useStyles();
  return (
    <Card className={classes.wrapper}>
      <CardContent>
        {isLoading &&
          <Box display="flex" justifyContent="center">
            <CircularProgress color="secondary" />
          </Box>
        }
        {!isLoading && weather &&
          <Box className={classes.contentWrapper} textAlign="center">
            <Box fontWeight="fontWeightMedium">
              <Typography variant="h3">
                {weather.city}
              </Typography>
            </Box>
            <Box alignItems="flex-end">
              <Typography className={classes.temperature} variant="h1">
                <span>{`${Math.round(weather.temperature)}°`}</span>
                <img
                  alt="weather icon"
                  src={`http://openweathermap.org/img/wn/${weather.weatherIcon}@2x.png`}
                />
              </Typography>
            </Box>
            <Box fontWeight="600">
              <Typography variant="h6">
                {weather.weather}
              </Typography>
            </Box>
          </Box>
        }
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
