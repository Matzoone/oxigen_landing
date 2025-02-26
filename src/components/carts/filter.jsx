import React, { useState } from "react";

export const ScrollButtonsWithCircle = ({
  products = [],
  onFilterChange = () => {},
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // تابع برای فیلتر کردن محصولات
  const filterProducts = (index) => {
    if (!products || !Array.isArray(products)) {
      onFilterChange([]);
      return;
    }

    let filteredProducts;
    switch (index) {
      case 0: // همه
        filteredProducts = products;
        break;
      case 1: // ماهانه - 30 روز
        filteredProducts = products.filter((product) => {
          const durationInDays = parseInt(product.duration) || 0;
          return durationInDays === 30;
        });
        break;
      case 2: // سه ماهه - 90 روز
        filteredProducts = products.filter((product) => {
          const durationInDays = parseInt(product.duration) || 0;
          return durationInDays === 90;
        });
        break;
      case 3: // شش ماهه - 180 روز
        filteredProducts = products.filter((product) => {
          const durationInDays = parseInt(product.duration) || 0;
          return durationInDays === 180;
        });
        break;
      case 4: // تخفیف‌دار
        filteredProducts = products.filter(
          (product) => product.discount && product.discount > 0
        );
        break;
      default:
        filteredProducts = products;
    }

    onFilterChange(filteredProducts);
  };

  // تابع برای تغییر وضعیت دکمه انتخاب شده
  const handleClick = (index) => {
    setActiveIndex(index);
    filterProducts(index);
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
      </div>
    </div>
  );
};
