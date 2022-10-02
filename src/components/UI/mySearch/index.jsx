import { Input } from "antd";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const MySearch = () => (
  <div>
    {" "}
    <Search
      placeholder="Enter a city..."
      allowClear
      onSearch={onSearch}
      style={{
        width: 300,
      }}
    />
  </div>
);

export default MySearch;
