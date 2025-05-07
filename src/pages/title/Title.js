import React, {useState, useEffect} from "react";
import {Layout, Menu, Divider, Image, Alert} from "antd";
import {CloseSquareOutlined} from "@ant-design/icons";
import "./Title.css";

const {Content} = Layout;

const Title = () => {
    const [isBlinking, setIsBlinking] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsBlinking(false);
        }, 4000); // بعد از ۴ ثانیه چشمک زدن متوقف شود
    }, []);

    return (
        <Layout className="landing-container">
            {/* ✅ اطلاع‌رسانی پویا */}
            <Alert
                message={<span><a className="titr-msg">اطلاعیه</a><span className="blink-icon">📢</span> </span>} // فقط آیکون چشمک‌زن باشد
                description={
                    <span className={`fade-description ${isBlinking ? "fade-in" : ""}`}>
            ثبت‌نام کوچینگ و دوره‌های آموزشی ترم تابستان آغاز شد
        </span>
                }
                type="warning"
                closable
                className="rtl-alert"
            />

            <Content className="content">
                {/* بخش تصویر */}
                <div className="image-section">
                    <Image
                        src="/assets/img/img.png"
                        alt="Sample"
                        width="80%"
                        preview={false}
                        style={{borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0,0,0,0.2)"}}
                    />
                </div>

                {/* خط عمودی */}
                <Divider type="vertical" className="divider"/>

                {/* بخش گزینه‌ها */}
                <div className="options-section">
                    <h2>خدمات جاوتار</h2>
                    <Menu mode="vertical" theme="light" className="menu">
                        <Menu.Item key="3">
                            <a href="https://www.esmaeilsadeghi.ir/question">استعدادیابی</a>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <a href="https://www.esmaeilsadeghi.ir/signup">ثبت نام</a>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <a href="https://www.esmaeilsadeghi.ir/training-path">کوچینگ</a>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <a href="https://www.esmaeilsadeghi.ir/#projects">آموزش</a>
                        </Menu.Item>
                    </Menu>
                </div>
            </Content>
        </Layout>
    );
};

export default Title;
