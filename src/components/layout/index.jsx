import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Col, Row } from "antd";
import styles from "./AppLayout.module.scss";

import Header from "../header";
import CurrentInfo from "../currentInfo";
import Weather from "../weather";
import CurrentEvent from "../currentEvent";
import { MyAlert, MyLoader } from "../UI";
import getWeatherBackground from "../../utils/getWeatherBackground";
import useActions from "../../hooks/useActions";

const AppLayout = () => {
  const [currentCoordinates, setCurrentCoordinates] = useState("");
  const [statusCoordinates, setStatusCoordinates] = useState(null);
  const [isDailyForecast, setIsDailyForecast] = useState(true);

  const { data, loading, error } = useSelector((state) => state.weather);
  const locationError = useSelector((state) => state.location.error);

  const { getLocationInfoByCoordinates, getWeatherForecastByCoordinates } =
    useActions();

  const { lat, lon } = currentCoordinates;
  const currentWeatherBackground = data?.current?.weather?.[0]?.main;
  const layoutBackground = getWeatherBackground(currentWeatherBackground);

  const changeForecastOption = () => {
    setIsDailyForecast(!isDailyForecast);
  };

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
    getLocationCoordinates();
  }, []);

  useEffect(() => {
    if (currentCoordinates) {
      getLocationInfoByCoordinates(lat, lon);
      getWeatherForecastByCoordinates(lat, lon);
    }
  }, [currentCoordinates]);

  return (
    <div>
      {statusCoordinates && (
        <Col align="middle" justify="center">
          <MyAlert description={statusCoordinates} />
        </Col>
      )}
      {error && (
        <Col align="middle" justify="center">
          <MyAlert description={error} />
        </Col>
      )}
      {locationError && (
        <Col align="middle" justify="center">
          <MyAlert description={locationError} />
        </Col>
      )}
      {loading ? (
        <Row className={styles.loader} align="middle" justify="center">
          <MyLoader />
        </Row>
      ) : (
        data && (
          <div
            className={styles.wrapper}
            style={{ backgroundImage: `url(${layoutBackground})` }}
          >
            <div className={styles.container}>
              <div>
                {" "}
                <header>
                  <Header changeForecastOption={changeForecastOption} />
                </header>{" "}
                <main>
                  <CurrentInfo />
                  <CurrentEvent />
                  <Weather isDailyForecast={isDailyForecast} />
                </main>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default AppLayout;
