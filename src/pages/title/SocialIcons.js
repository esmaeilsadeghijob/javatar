import React from "react";
import { Layout } from "antd";
import { InstagramOutlined, LinkedinOutlined, WhatsAppOutlined, GlobalOutlined } from "@ant-design/icons";
import "./SocialIcons.css";

const { Header } = Layout;

const SocialIcons = () => {
    return (
        <Header className="social-header">
            <div className="social-container">
                <a href="https://www.instagram.com/javatar2/" target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/javatar-edu-041321214/" target="_blank" rel="noopener noreferrer">
                    <LinkedinOutlined className="social-icon" />
                </a>
                <a href="https://wa.me/989382249255" target="_blank" rel="noopener noreferrer">
                    <WhatsAppOutlined className="social-icon" />
                </a>
                <a href="https://www.esmaeilsadeghi.ir/" target="_blank" rel="noopener noreferrer">
                    <GlobalOutlined className="social-icon" />
                </a>
            </div>
        </Header>
    );
};

export default SocialIcons;
