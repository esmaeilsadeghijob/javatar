import React, { useState, useEffect } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import "./Roadmap.css";

const roadmapSteps = [
    { id: 0, icon: "🚀", title: "استارت", description: "شروع مسیر یادگیری", position: { x: 50, y: 100 } },
    { id: 1, icon: "💡", title: "استعدادیابی", description: "کشف توانایی‌های فردی", position: { x: 200, y: 180 } },
    { id: 2, icon: "🧑‍💼", title: "مشاوره", description: "راهنمایی برای مسیر بهتر", position: { x: 350, y: 260 } },
    { id: 3, icon: "📚", title: "آموزش", description: "یادگیری مفاهیم پایه", position: { x: 500, y: 340 } },
    { id: 4, icon: "🎯", title: "ارتقای مهارت", description: "تقویت مهارت‌های عملی", position: { x: 650, y: 420 } },
];

const Roadmap = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // نمایش سه مرحله: قبلی، فعلی (بزرگ‌تر)، بعدی
    const visibleSteps = roadmapSteps.slice(
        Math.max(0, currentIndex - 1),
        Math.min(roadmapSteps.length, currentIndex + 2)
    );

    const moveStep = (newIndex) => {
        setCurrentIndex(newIndex);
    };

    // کنترل حرکت با اسکرول
    useEffect(() => {
        const handleScroll = (event) => {
            if (event.deltaY > 0) {
                setCurrentIndex((prev) => Math.min(roadmapSteps.length - 1, prev + 1));
            } else {
                setCurrentIndex((prev) => Math.max(0, prev - 1));
            }
        };

        window.addEventListener("wheel", handleScroll);
        return () => window.removeEventListener("wheel", handleScroll);
    }, []);

    return (
        <div className="roadmap-container">
            <h2>مسیر یادگیری برنامه‌نویسی</h2>
            <div className="map-view">
                {visibleSteps.map((step) => (
                    <motion.div
                        key={step.id}
                        className={`step-marker ${step.id === currentIndex ? "current-step" : ""}`}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        onClick={() => moveStep(step.id)}
                    >
                        {step.icon} {step.title}
                        {step.id === currentIndex && <p className="step-description">{step.description}</p>}
                    </motion.div>
                ))}
            </div>

            {/*<motion.div*/}
            {/*    className="student-icon"*/}
            {/*    animate={{ x: roadmapSteps[currentIndex].position.x, y: roadmapSteps[currentIndex].position.y }}*/}
            {/*    transition={{ type: "spring", stiffness: 100 }}*/}
            {/*>*/}
            {/*    🎓*/}
            {/*</motion.div>*/}

            <div className="controls">
                <div className="prev-step"
                     onClick={() => moveStep(Math.max(0, currentIndex - 1))}
                     style={{cursor: currentIndex === 0 ? "default" : "pointer"}}>
                    <LeftOutlined className="step-icon"/>
                </div>

                <div className="next-step"
                     onClick={() => moveStep(Math.min(roadmapSteps.length - 1, currentIndex + 1))}
                     style={{cursor: currentIndex === roadmapSteps.length - 1 ? "default" : "pointer"}}>
                    <RightOutlined className="step-icon"/>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
