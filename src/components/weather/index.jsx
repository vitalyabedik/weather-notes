import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Col, Row } from "antd";

import styles from "./Weather.module.scss";

import TodayForecast from "./TodayForecast";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import { MyAlert, MyLoader } from "../UI";
import useActions from "../../hooks/useActions";

const Weather = ({ isDailyForecast }) => {
  const [currentCoordinates, setCurrentCoordinates] = useState("");
  const { lat, lon } = currentCoordinates;

  const { data, loading, error } = useSelector((state) => state.weather);
  const { getLocationInfoByCoordinates, getWeatherForecastByCoordinates } =
    useActions();

  // const getWeatherData = () => {
  //   if (!navigator.geolocation) {
  //     console.log("does not work");
  //   } else {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const data = {
  //         lat: position.coords.latitude,
  //         lon: position.coords.longitude,
  //       };
  //       setCurrentCoordinates(data);
  //       dispatch(loadLocation(lat, lon));
  //       dispatch(loadWeather(lat, lon));
  //     });
  //   }
  // };

  // useEffect(() => {
  //   getWeatherData();
  // }, [lat, lon]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position.coords.latitude) {
        const positionData = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        setCurrentCoordinates(positionData);
      }
    });

    if (lat) {
      getLocationInfoByCoordinates(lat, lon);
      getWeatherForecastByCoordinates(lat, lon);
    }
  }, [lat, lon]);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     // if (!position) return;

  //     if (position.coords.latitude) {
  //       const data = {
  //         lat: position.coords.latitude,
  //         lon: position.coords.longitude,
  //       };
  //       setCurrentCoordinates(data);
  //     }
  //   });

  //   if (currentCoordinates) {
  //     dispatch(getLocationInfoByCoordinates(lat, lon));
  //     dispatch(getWeatherForecastByCoordinates(lat, lon));
  //   }
  // }, [lat, lon]);

  return (
    <div className={styles.weather}>
      {error && (
        <Col align="middle" justify="center">
          <MyAlert />
        </Col>
      )}
      {loading ? (
        <Row align="middle" justify="center">
          <MyLoader />
        </Row>
      ) : (
        data && (
          <Row align="middle">
            <Col xs={24} sm={8} md={6} lg={5} xl={4}>
              <TodayForecast />
            </Col>
            <Col xs={24} sm={16} md={18} lg={19} xl={20}>
              <div>
                {isDailyForecast ? <DailyForecast /> : <HourlyForecast />}
              </div>
            </Col>
          </Row>
        )
      )}
    </div>
  );
};

export default Weather;

//   return (
//     <div className={styles.weather}>
//       {weather ? (
//         <Row align="middle">
//           <Col xs={24} sm={8} md={6} lg={5} xl={4}>
//             <TodayForecast />
//           </Col>
//           <Col xs={24} sm={16} md={18} lg={19} xl={20}>
//             <div>
//               {isDailyForecast ? <DailyForecast /> : <HourlyForecast />}
//             </div>
//           </Col>
//         </Row>
//       ) : (
//         <Spin
//           style={{
//             margin: "20px 0",
//             marginBottom: "20px",
//             padding: "30px 50px",
//             textAlign: "center",
//             borderRadius: " 4px",
//             fontSize: "30px",
//           }}
//           tip="Loading..."
//           size="large"
//         />
//       )}
//     </div>
//   );
// };

// export default Weather;

// import axios from "axios";
// import { useState, useEffect } from "react";

// import { Col, Row } from "antd";

// import styles from "./Weather.module.scss";

// import TodayForecast from "./TodayForecast";
// import DailyForecast from "./DailyForecast";
// import HourlyForecast from "./HourlyForecast";

// const Weather = ({ isDailyForecast }) => {
//   const [weatherData, setWeatherData] = useState();
//   const [locationData, setLocationData] = useState();

//   const APIKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     navigator.geolocation.getCurrentPosition((position) => {
//   //       setLat(position.coords.latitude);
//   //       setLon(position.coords.longitude);
//   //     });

//   //     await fetch(
//   //       `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${APIKey}`
//   //     )
//   //       .then((res) => res.json())
//   //       .then((result) => {
//   //         setData(result);
//   //       });
//   //   };
//   //   fetchData();
//   // }, [lat, lon]);

//   const getWeather = () => {
//     if (!navigator.geolocation) {
//       console.log("does not work");
//     } else {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const lat = position.coords.latitude;
//         const lon = position.coords.longitude;

//         const weatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${APIKey}`;
//         const locationAPI = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${APIKey}`;

//         const fetchWeather = async () => {
//           await fetch(weatherAPI)
//             .then((res) => res.json())
//             .then((data) => {
//               setWeatherData(data);
//             })
//             .catch((err) => console.log(err));
//         };

//         const fetchLocation = async () => {
//           fetch(locationAPI)
//             .then((res) => res.json())
//             .then((data) => {
//               setLocationData(data);
//             })
//             .catch((err) => console.log(err));
//         };
//         fetchWeather();
//         fetchLocation();
//       });
//     }
//   };

//   useEffect(() => {
//     getWeather();
//   }, []);

//   const todayWeatherData = weatherData?.current;
//   const dailyWeatherData = weatherData?.daily;
//   const hourlyWeatherData = weatherData?.hourly;

//   // if (weatherData) console.log(todayWeatherData);
//   // if (locationData) console.log(locationData);

//   // const fetchCoordinates = () => {
//   //   navigator.geolocation.getCurrentPosition((position) => {
//   //     setLatitude(position.coords.latitude);
//   //     setLongitude(position.coords.longitude);
//   //   });
//   // };

//   // fetchCoordinates();
//   // console.log(latitude, longitude);

//   // console.log(
//   //   `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${APIKey}`
//   // );

//   // const fetchLocation = async () => {
//   //   const result = await axios
//   //     .get(
//   //       `${BASE_GEOCODING_URL_OPENWEATHER}reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${APIKey}`
//   //     )
//   //     .then((response) => {
//   //       setResponseData(response.data);
//   //     });
//   // };

//   return (
//     <div className={styles.weather}>
//       {typeof weatherData !== "undefined" ? (
//         <Row align="middle">
//           <Col xs={24} sm={8} md={6} lg={5} xl={4}>
//             <TodayForecast todayData={todayWeatherData} />
//           </Col>
//           <Col xs={24} sm={16} md={18} lg={19} xl={20}>
//             <div>
//               {isDailyForecast ? (
//                 <DailyForecast dailyData={dailyWeatherData} />
//               ) : (
//                 <HourlyForecast />
//               )}
//             </div>
//           </Col>
//         </Row>
//       ) : (
//         <h2 style={{ textAlign: "center", fontSize: "50px", color: "red" }}>
//           Loading...
//         </h2>
//       )}
//     </div>
//   );
// };

// export default Weather;
