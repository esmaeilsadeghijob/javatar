import React from "react";
import {Layout, Menu, Input} from "antd";
import {HomeOutlined, ReadOutlined, InfoCircleOutlined, MenuOutlined} from "@ant-design/icons";
import "./styles.css"; // اضافه کردن فایل CSS

const {Header} = Layout;

const AppHeader = () => {
    return (
        <Header className="app-header">
            {/* قسمت چپ هدر */}
            <div className="header-left">
                <Input placeholder="جستجو..." className="search-input"/>
            </div>

            {/* قسمت راست هدر شامل آیکون سه خط و منوهای اصلی */}
            <div className="header-right">
                <Menu theme="dark" mode="horizontal" className="menu-right">
                    <Menu.Item key="3" icon={<InfoCircleOutlined/>}>
                        درباره ما
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ReadOutlined/>}>
                        آموزش
                    </Menu.Item>
                    <Menu.Item key="1" icon={<HomeOutlined/>}>
                        خانه
                    </Menu.Item>
                </Menu>

                <MenuOutlined className="more-icon"/>
            </div>
        </Header>
    );
};

export default AppHeader;
