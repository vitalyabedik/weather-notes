import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Row } from "antd";

import styles from "./Weather.module.scss";

import TodayForecast from "./TodayForecast";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

import { loadWeather } from "../../redux/actions/weatherAction";
import { loadLocation } from "../../redux/actions/locationAction";

const Weather = ({ isDailyForecast }) => {
  const [currentLocation, setCurrentLocation] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [responseData, setResponseData] = useState({});

  const dispatch = useDispatch();

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLat(position.coords.latitude);
  //     setLon(position.coords.longitude);
  //   });
  //   dispatch(loadLocation(lat, lon));
  //   dispatch(loadWeather(lat, lon));
  // }, [lat, lon]);

  // useEffect(() => {
  // navigator.geolocation.getCurrentPosition((position) => {
  //   setLat(position.coords.latitude);
  //   setLon(position.coords.longitude);
  // });
  //   dispatch(loadLocation(lat, lon));
  //   dispatch(loadWeather(lat, lon));
  // }, [lat, lon]);

  // !!!
  // const useGeoLocation = () => {
  //   const [curLocation, setCurLocation] = useState({
  //     loaded: false,
  //     coordinates: {},
  //   });

  //   const onSuccess = (location) => {
  //     setCurLocation({
  //       loaded: true,
  //       coordinates: {
  //         lat: location.coords.latitude,
  //         lon: location.coords.longitude,
  //       },
  //     });
  //   };

  //   const onError = (error) => {
  //     setCurLocation({
  //       loaded: true,
  //       error,
  //     });
  //   };

  //   useEffect(() => {
  //     if (!("geolocation" in navigator)) {
  //       onError({
  //         code: 0,
  //         message: "Geolocation not supported",
  //       });
  //     }

  //     navigator.geolocation.getCurrentPosition(onSuccess, onError);
  //   }, []);

  //   return curLocation;
  // };

  // const location = useGeoLocation();
  // console.log(location);

  // !!

  // useEffect(() => {
  //   const { lat, lon } = location.coordinates;

  // dispatch(loadLocation(lat, lon));
  // }, []);

  // const [locationData, setLocationData] = useState("");
  // const getCurrentLocation = (position) => {
  //   console.log(position);
  //   const data = {
  //     lat: position.coords.latitude,
  //     lon: position.coords.longitude,
  //   }
  //   setLocationData(data)
  // }

  const BASE_GEOCODING_URL_OPENWEATHER =
    "http://api.openweathermap.org/geo/1.0/";
  const APIKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const getLocation = async () => {
    const location = await navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      }
    );
  };

  const fetchLocation = async () => {
    const result = await axios
      .get(
        `${BASE_GEOCODING_URL_OPENWEATHER}reverse?lat=${lat}&lon=${lon}&limit=1&appid=${APIKey}`
      )
      .then((response) => {
        setResponseData(response.data);
      });
  };

  useEffect(() => {
    getLocation();
    fetchLocation();
  }, [lat, lon]);

  console.log(responseData[0]);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLat(position.coords.latitude);
  //     setLon(position.coords.longitude);
  //   });

  //   const endpointAPI = `${BASE_GEOCODING_URL_OPENWEATHER}reverse?lat=${lat}&lon=${lon}&limit=1&appid=${APIKey}`;

  // axios.get(endpointAPI).then((response) => {
  //   setResponseData(response.data);
  //   console.log(response.data);
  // });
  // }, [lat, lon]);

  //   fetch(
  //     `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${`b9ac83fce506bd99363a07a936631208`}`
  //   )
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data));
  // });

  // useEffect(() => {
  //   const lat = 52.7876;
  //   const lon = 27.5415;

  //   dispatch(loadLocation(lat, lon));
  //   dispatch(loadWeather(lat, lon));
  // }, []);

  // const lat = currentLocation.latitude;
  // const lon = currentLocation.longitude;

  // console.log(lat);
  // console.log(lon);

  return lat ? (
    <div className={styles.weather}>
      <Row align="middle">
        <Col xs={24} sm={8} md={6} lg={5} xl={4}>
          <TodayForecast />
        </Col>
        <Col xs={24} sm={16} md={18} lg={19} xl={20}>
          <div>{isDailyForecast ? <DailyForecast /> : <HourlyForecast />}</div>
        </Col>
      </Row>
    </div>
  ) : (
    "Loading..."
  );
};

export default Weather;
