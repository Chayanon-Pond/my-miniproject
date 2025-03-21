import UserFrom from "./UserFrom";
import { Film, RefreshCcw } from "lucide-react";
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
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
      <div className="rounded-lg border bg-white text-gray-800 w-full max-w-md shadow-lg">
        <div className="flex flex-row space-y-2 p-6 bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-t-lg">
          <Film size={35} className="mr-4" />
          <h1 className="text-center text-2xl font-bold">Movie Survey</h1>
        </div>
        <div className="p-6">
          {!isSubmitted ? (
            <UserFrom onSubmit={handleFormSubmit} />
          ) : (
            <div>
              <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                <div>
                  <h3 className="text-lg font-medium text-green-800 flex items-center gap-2 mb-4">
                    ส่งแบบสำรวจสำเร็จ!
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-1">
                    <p className="text-sm font-medium text-gray-500 flex flex-row">
                      ชื่อ:
                    </p>
                    <p className="text-sm col-span-2">{formData.name}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    <p className="text-sm font-medium text-gray-500 flex flex-row ">
                      อีเมล:
                    </p>
                    <p className="text-sm col-span-2">{formData.email}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    <p className="text-sm font-medium text-gray-500 flex flex-row">
                      หนังที่เลือก:{" "}
                    </p>
                    <p className="text-sm font-medium text-purple-700 col-span-2">
                      {formData.movie}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm font-medium text-gray-500 mb-2">
                      ความคิดเห็น:
                    </p>
                    <p className="text-sm bg-gray-50 p-3 rounded-md">
                      {formData.comment || "ไม่มี"}
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center justify-center cursor-pointer w-full"
                onClick={handleResetSurvey}
              >
                <RefreshCcw className="mr-4" size={16} /> ทำแบบสำรวจใหม่
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
