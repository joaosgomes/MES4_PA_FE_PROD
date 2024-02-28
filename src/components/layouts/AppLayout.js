//AppLayout.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button, theme, Switch } from "antd";
import { getEventsHTML } from "../../controllers/EventController";
import LocalStorage from "../../utils/LocalStorage"

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ExperimentOutlined,
  FireOutlined,
  GithubOutlined,
  MoonFilled,
  SunFilled,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Retrieve the theme value from localStorage or set "dark" as default
  const [bgTheme, setBgTheme] = useState(
    LocalStorage.getItem("theme") || "dark"
  );

  const handleThemeChange = (checked) => {
    const newTheme = checked ? "light" : "dark";
    setBgTheme(newTheme);
  };

  useEffect(() => {
    // Save the theme value to localStorage whenever it changes
    LocalStorage.setItem("theme", bgTheme);
  }, [bgTheme]);

  const getUpdatedContentStyle = (theme) => {
    return {
      margin: "24px 16px 0",
      padding: 24,
      minHeight: 280,
      background: theme === "light" ? "#ffffff" : "#f5f5f5",
      borderRadius: borderRadiusLG,
    };
  };

  const contentStyle = getUpdatedContentStyle(bgTheme);

  const logoStyle = {
    height: "32px",
    margin: "16px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "6px",
  };

  const buttonStyle = {
    fontSize: "16px",
    width: 64,
    height: 64,
  };

  const headerStyle = {
    padding: 0,
    background: colorBgContainer,
  };

  const layoutStyle = {
    minHeight: "100vh",
  };

  const menuItems = [
    {
      label: <Link to="/MES4_PA_FE_PROD/new-event">New Event</Link>,
      icon: <ExperimentOutlined />,
      key: "1",
    },
    {
      label: "Open Events",
      icon: <FireOutlined />,
      key: "2",
      onClick: () => getEventsHTML(),
    },
    {
      label: (
        <Link target="_blank" to="https://github.com/">
          GitHub
        </Link>
      ),
      icon: <GithubOutlined />,
      key: "3",
    },
  ];

  return (
    <Layout style={layoutStyle}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => setCollapsed(broken)}
      >
        <Link data-c="MES4_PA_FE_PROD" aria-label="MES4_PA_FE_PROD" to="/MES4_PA_FE_PROD">
          <div style={logoStyle} className="demo-logo-vertical" />
        </Link>
        <br />

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={buttonStyle}
            size="small"
          />
          <Switch
            checkedChildren={<MoonFilled />}
            unCheckedChildren={<SunFilled />}
            size="small"
            onChange={handleThemeChange}
          />
        </Header>
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
