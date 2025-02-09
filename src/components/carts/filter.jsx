import React, { useState } from "react";

export const ScrollButtonsWithCircle = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // تابع برای تغییر وضعیت دکمه انتخاب شده
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative mt-10 bg-red-200 rounded-3xl px-2 py-2 max-md:hidden">
      {/* دکمه‌ها */}
      <div className="relative flex justify-center gap-1 max-md:flex-col max-md:items-center flex-row">
        <button
          className={`relative px-7 py-2 rounded-3xl font-medium cursor-pointer transition-all duration-300 ease-in-out transform ${
            activeIndex === 0 ? "text-white bg-red-500 " : "text-black"
          }`}
          onClick={() => handleClick(0)}
        >
          همه
        </button>
        <button
          className={`relative px-7 py-2 rounded-3xl font-medium cursor-pointer transition-all duration-300 ease-in-out transform ${
            activeIndex === 1 ? "text-white bg-red-500 " : "text-black"
          }`}
          onClick={() => handleClick(1)}
        >
          ماهانه
        </button>
        <button
          className={`relative px-7 py-2 rounded-3xl font-medium cursor-pointer transition-all duration-300 ease-in-out transform ${
            activeIndex === 2 ? "text-white bg-red-500 " : "text-black"
          }`}
          onClick={() => handleClick(2)}
        >
          سه ماهه
        </button>
        <button
          className={`relative px-7 py-2 rounded-3xl font-medium cursor-pointer transition-all duration-300 ease-in-out transform ${
            activeIndex === 3 ? "text-white bg-red-500 " : "text-black"
          }`}
          onClick={() => handleClick(3)}
        >
          شش ماهه
        </button>
        <button
          className={`relative px-7 py-2 rounded-3xl font-medium cursor-pointer transition-all duration-300 ease-in-out transform ${
            activeIndex === 4 ? "text-white bg-red-500 " : "text-black"
          }`}
          onClick={() => handleClick(4)}
        >
          20% تخفیف
        </button>
      </div>
    </div>
  );
};
