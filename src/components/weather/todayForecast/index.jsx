import { Row, Col, Typography, Tag } from "antd";

const { Title } = Typography;

const TodayForecast = () => (
  <div className="todayForecast">
    <Row justify="center">
      <Row>
        <Col span={24}>
          {" "}
          <img
            style={{
              width: 80,
            }}
            alt="example"
            src="https://cdn-icons-png.flaticon.com/512/5247/5247971.png"
          />
        </Col>
      </Row>

      <Row justify="center" gutter={[16, 8]}>
        {" "}
        <Col>
          <Tag
            style={{
              borderRadius: 15,
              fontSize: 18,
              padding: 8,
              color: "white",
              background: "#2e3041",
              border: "none",
            }}
          >
            TODAY
          </Tag>
        </Col>
        <Col span={24}>
          {" "}
          <Title
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: 0,
            }}
            level={2}
          >
            12&deg;
          </Title>
        </Col>
      </Row>
    </Row>
  </div>
);

export default TodayForecast;

// const { Meta } = Card;

// const TodayForecast = () => (
//   <div className="todayForecast">
//     <Card
//       style={{
//         display: "flex",

//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#434554",
//       }}
//       bordered={false}
//       cover={
//         <img
//           style={{
//             width: 90,
//           }}
//           alt="example"
//           src="https://cdn-icons-png.flaticon.com/512/5247/5247971.png"
//         />
//       }
//     >
//       <Meta
//         title=<Tag
//           style={{
//             borderRadius: 15,
//             fontSize: 18,
//             padding: 8,
//             marginLeft: 0,
//           }}
//           color="#2e3041"
//         >
//           TODAY
//         </Tag>
//         description=<Title
//           style={{
//             color: "white",
//             textAlign: "center",
//             marginBottom: 0,
//           }}
//           level={2}
//         >
//           12&deg;
//         </Title>
//       />
//     </Card>
//   </div>
// );

// export default TodayForecast;
