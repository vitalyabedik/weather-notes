import { Input } from "antd";

const { Search } = Input;

const MySearch = (onSearch) => (
  <div>
    {" "}
    <Search placeholder="Enter a city..." allowClear onSearch={onSearch} />
  </div>
);

export default MySearch;
