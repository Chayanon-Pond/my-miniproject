import UserFrom from "./UserFrom";
import { Film } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsSubmitted(true);
  };
  const handleResetSurvey = () => {
    setFormData(null);
    setIsSubmitted(false);
  };
  return (
    <div className="napber">
      <div className="hero-container">
        <Film size={35} />
        <h1>Movie Survey</h1>
      </div>
      <div className="form-container">
        {!isSubmitted ? (
          <UserFrom onSubmit={handleFormSubmit} />
        ) : (
          <div>
            <div className="form-head">
              <h2 className="form-content">✅ ส่งแบบสำรวจสำเร็จ!</h2>
              <p>ชื่อ: {formData.name}</p>
              <p>อีเมล: {formData.email}</p>
              <p>หนังที่เลือก: {formData.movie}</p>
              <div className="form-comment">
                <p>ความคิดเห็น: {formData.comment || "ไม่มี"}</p>
              </div>
            </div>
            <button className="btn-reset" onClick={handleResetSurvey}>
              ทำแบบสำรวจใหม่
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
