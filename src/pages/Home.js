import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import "./Home.css";

const { Header, Content, Footer } = Layout;

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Layout className={darkMode ? "dark-mode" : "light-mode"}>
            <Header className="header">
                <div className="logo">Java Academy</div>
                <Menu theme={darkMode ? "dark" : "light"} mode="horizontal" className="menu" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1">خانه</Menu.Item>
                    <Menu.Item key="2">دوره‌ها</Menu.Item>
                    <Menu.Item key="3">تماس با ما</Menu.Item>
                </Menu>
                <Button className="dark-mode-toggle" onClick={toggleDarkMode}>
                    {darkMode ? "حالت روز" : "حالت شب"}
                </Button>
            </Header>
            <Content className="content">
                <h1>به وبسایت ما خوش آمدید</h1>
                <p>آموزش‌های حرفه‌ای برنامه‌نویسی به زبان فارسی و انگلیسی</p>
            </Content>
            <Footer className="footer">
                ©2025 گروه آموزشی جاوا | تمامی حقوق محفوظ است.
            </Footer>
        </Layout>
    );
};

export default Home;
