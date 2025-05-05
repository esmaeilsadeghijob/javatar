import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import logo from '../../assets/img/javatar2.png';

const LandingPage = () => {
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                navigate("/title");
                // navigate("/roadmap");
            }, 1000); // انتقال به صفحه بعد پس از 1 ثانیه
        }, 5000); // محو شدن پس از 5 ثانیه

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className={`landing-page ${fadeOut ? "fade-out" : ""}`}>
            <img src={logo} alt="جاواتار" className="logo"/>
            <h1>گروه آموزشی جاواتار</h1>
            <p>ارائه آموزش‌های مرتبط با زبان های برنامه نویسی</p>
        </div>
    );
};

export default LandingPage;
