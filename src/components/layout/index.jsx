import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Col, Row } from "antd";

import styles from "./AppLayout.module.scss";

import Header from "../Header";
import CurrentInfo from "../CurrentInfo";
import Weather from "../Weather";
import CurrentEvent from "../CurrentEvent";
import { MyAlert, MyLoader } from "../UI";
import getWeatherBackground from "../../utils/getWeatherBackground";
import useActions from "../../hooks/useActions";
import {
  selectAllWeatherData,
  selectWeatherInfo,
} from "../../redux/selectors/weatherSelectors";

const AppLayout = () => {
  const [currentCoordinates, setCurrentCoordinates] = useState("");
  const [statusCoordinates, setStatusCoordinates] = useState(null);

  const { currentOpenWeather, hourlyStormGlass } =
    useSelector(selectAllWeatherData);
  const location = useSelector((state) => state.location.data);
  const notes = useSelector((state) => state.notes);

  const { isBasicAPI } = useSelector((state) => state.app);
  const { loadingWeather, errorWeather } = useSelector(selectWeatherInfo);
  const locationError = useSelector((state) => state.location.error);

  const {
    getLocationInfoByCoordinates,
    getWeatherForecastByCoordinates,
    getWeatherStormGlass,
  } = useActions();

  const { lat, lon } = currentCoordinates;
  const currentWeatherBackground = currentOpenWeather?.weather?.[0]?.main;
  const layoutBackground = getWeatherBackground(currentWeatherBackground);

  const getLocationCoordinates = () => {
    if (!navigator.geolocation) {
      setStatusCoordinates("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatusCoordinates(null);
          const positionCoordinates = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          setCurrentCoordinates(positionCoordinates);
        },
        () => {
          setStatusCoordinates("Unable to retrieve your location");
        }
      );
    }
  };

  useEffect(() => {
    if (!location) {
      getLocationCoordinates();
    }
  }, []);

  useEffect(() => {
    if (currentCoordinates) {
      getLocationInfoByCoordinates(lat, lon);
      getWeatherForecastByCoordinates(lat, lon);
    }
  }, [currentCoordinates]);

  useEffect(() => {
    if (!hourlyStormGlass && !isBasicAPI) {
      getWeatherStormGlass(lat, lon);
    }
  }, [isBasicAPI]);

  return (
    <>
      {statusCoordinates && (
        <Col align="middle" justify="center">
          <MyAlert description={statusCoordinates} />
        </Col>
      )}
      {errorWeather && (
        <Col align="middle" justify="center">
          <MyAlert description={errorWeather} />
        </Col>
      )}
      {locationError && (
        <Col align="middle" justify="center">
          <MyAlert description={locationError} />
        </Col>
      )}
      {loadingWeather ? (
        <Row className={styles.loader} align="middle" justify="center">
          <MyLoader />
        </Row>
      ) : (
        currentOpenWeather && (
          <div
            className={styles.wrapper}
            style={{ backgroundImage: `url(${layoutBackground})` }}
          >
            <div className={styles.container}>
              <div>
                {" "}
                <header>
                  <Header />
                </header>{" "}
                <main>
                  <CurrentInfo />
                  {notes.length !== 0 && <CurrentEvent />}
                  <Weather />
                </main>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default AppLayout;
