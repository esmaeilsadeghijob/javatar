// import React, { useState } from "react";
// import { Card, Modal } from "antd";
// import { motion } from "framer-motion";
//
// const learningSteps = [
//     { id: 1, title: "ثبت‌نام", details: "شروع سفر برنامه‌نویسی" },
//     { id: 2, title: "استعدادیابی", details: "کشف توانایی‌های فردی" },
//     { id: 3, title: "مشاوره", details: "راهنمایی برای مسیر بهتر" },
//     { id: 4, title: "آموزش", details: "یادگیری مفاهیم پایه" },
//     { id: 5, title: "ارتقای مهارت", details: "تقویت مهارت‌های عملی" },
// ];
//
// const LearningMap = () => {
//     const [activeStep, setActiveStep] = useState(null);
//
//     return (
//         <div style={{ textAlign: "center", padding: "20px" }}>
//             <h2>🚀 مسیر یادگیری برنامه‌نویسی</h2>
//             <div style={{ position: "relative", width: "600px", height: "300px", margin: "auto" }}>
//                 {learningSteps.map((step, index) => (
//                     <motion.div
//                         key={step.id}
//                         className="step-marker"
//                         initial={{ x: index * 120 }}
//                         animate={{ x: activeStep === step.id ? index * 120 + 20 : index * 120 }}
//                         transition={{ duration: 0.5 }}
//                         onClick={() => setActiveStep(step.id)}
//                     >
//                         🚗
//                     </motion.div>
//                 ))}
//             </div>
//             {activeStep && (
//                 <Modal open={true} onCancel={() => setActiveStep(null)} footer={null}>
//                     <Card title={learningSteps.find(step => step.id === activeStep).title}>
//                         <p>{learningSteps.find(step => step.id === activeStep).details}</p>
//                     </Card>
//                 </Modal>
//             )}
//         </div>
//     );
// };
//
// export default LearningMap;
