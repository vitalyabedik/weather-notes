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

const AppLayout = () => {
  const [currentCoordinates, setCurrentCoordinates] = useState("");
  const [statusCoordinates, setStatusCoordinates] = useState(null);

  const { data, loading, error } = useSelector((state) => state.weather);
  const locationError = useSelector((state) => state.location.error);
  const notes = useSelector((state) => state.notes);

  const { getLocationInfoByCoordinates, getWeatherForecastByCoordinates } =
    useActions();

  const { lat, lon } = currentCoordinates;
  const currentWeatherBackground = data?.current?.weather?.[0]?.main;
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
    </div>
  );
};

export default AppLayout;
