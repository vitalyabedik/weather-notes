import { Col, Row } from "antd";

import styles from "./Weather.module.scss";

import TodayForecast from "./todayForecast";
import DaysForecast from "./days";

const Weather = ({ isDailyForecast }) => (
  <div className="container">
    <div className={styles.weather}>
      <Row justify="space-evenly" align="middle">
        <Col span={6}>
          <TodayForecast />
        </Col>
        <Col span={18}>
          <DaysForecast isDailyForecast={isDailyForecast} />
        </Col>
      </Row>
    </div>
  </div>
);

export default Weather;

// import { Col, Row } from "antd";

// import styles from "./Weather.module.scss";

// import TodayForecast from "./todayForecast";
// import DaysForecast from "./days";

// const Weather = ({ isDailyForecast }) => (
//   <div className="container">
//     <div className={styles.weather}>
//       <Row align="middle">
//         <Col span={6}>
//           <TodayForecast />
//         </Col>
//         <Col span={18}>
//           <DaysForecast isDailyForecast={isDailyForecast} />
//         </Col>
//       </Row>
//     </div>
//   </div>
// );

// export default Weather;
