import { Typography } from "antd";

const { Title } = Typography;

const HeaderTitle = ({ title }) => {
  return (
    <div style={{ textAlign: "center", margin: "24px 0" }}>
      <Title level={3} style={{ color: "#888", fontSize: "1.5rem" }}>
        {title}
      </Title>
    </div>
  );
};

export default HeaderTitle;
