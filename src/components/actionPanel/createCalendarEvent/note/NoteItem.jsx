import { Tag, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Text } = Typography;

const NoteItem = ({ note }) => (
  <>
    <div>
      <Tag>{note.time}</Tag>
      <Text>{note.text}</Text>
    </div>
    <div>
      <EditOutlined />
      <DeleteOutlined style={{ color: "red", marginLeft: 12 }} />
    </div>
  </>
);

export default NoteItem;
