import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardContent = () => {
  const plans = [
    {
      id: 1,
      title: "اکسیژن",
      subtitle: "3 ماهه - حجم نامحدود",
      originalPrice: "999,000",
      price: 249000,
      features: [
        "14 روز گارانتی",
        "آی‌پی ثابت",
        "پشتیبانی",
        "تنوع سرورها",
      ],
    }, {
      id: 1,
      title: "اکسیژن",
      subtitle: "3 ماهه - حجم نامحدود",
      originalPrice: "999,000",
      price: 249000,
      features: [
        "14 روز گارانتی",
        "آی‌پی ثابت",
        "پشتیبانی",
        "تنوع سرورها",
      ],
    }, {
      id: 1,
      title: "اکسیژن",
      subtitle: "3 ماهه - حجم نامحدود",
      originalPrice: "999,000",
      price: 249000,
      features: [
        "14 روز گارانتی",
        "آی‌پی ثابت",
        "پشتیبانی",
        "تنوع سرورها",
      ],
    }, {
      id: 1,
      title: "اکسیژن",
      subtitle: "3 ماهه - حجم نامحدود",
      originalPrice: "999,000",
      price: 249000,
      features: [
        "14 روز گارانتی",
        "آی‌پی ثابت",
        "پشتیبانی",
        "تنوع سرورها",
      ],
    }, {
      id: 1,
      title: "اکسیژن",
      subtitle: "3 ماهه - حجم نامحدود",
      originalPrice: "999,000",
      price: 249000,
      features: [
        "14 روز گارانتی",
        "آی‌پی ثابت",
        "پشتیبانی",
        "تنوع سرورها",
      ],
    }, {
      id: 1,
      title: "اکسیژن",
      subtitle: "3 ماهه - حجم نامحدود",
      originalPrice: "999,000",
      price: 249000,
      features: [
        "14 روز گارانتی",
        "آی‌پی ثابت",
        "پشتیبانی",
        "تنوع سرورها",
      ],
    }, {
      id: 1,
      title: "اکسیژن",
      subtitle: "3 ماهه - حجم نامحدود",
      originalPrice: "999,000",
      price: 249000,
      features: [
        "14 روز گارانتی",
        "آی‌پی ثابت",
        "پشتیبانی",
        "تنوع سرورها",
      ],
    },
  ];

  return (
    <div className="w-[90%] m-auto py-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {plans.map((plan) => (
          <SwiperSlide key={plan.id}>
            <div className="bg-[#FFF0F0] rounded-3xl p-8 flex flex-col h-fit shadow-lg w-80 border border-gray-400">
              <div className="text-center">
                <h3 className="text-2xl text-red-700 font-semibold mb-10">{plan.title}</h3>
                <p className="text-gray-800 font-semibold mb-5">{plan.subtitle}</p>
                <div className="flex flex-col items-center mb-6">
                  <span className="text-gray-600 line-through text-sm mb-1 mt-2">{plan.originalPrice} تومان</span>
                  <span className="text-4xl font-bold mt-8">{plan.price.toLocaleString()} تومان</span>
                </div>
              </div>
              
           <img src="../imgs/line.png" alt="line" className="mb-8 mt-4" />
              
              <div className="flex-grow">
                <h4 className="text-gray-800 font-bold mb-8 text-center">ویژگی‌ها</h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                  <div className="space-y-6">
                    {plan.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center justify-start text-gray-600 gap-3">
                        <img src="../imgs/tik.png" alt="tik" className="w-5 h-5" />
                        <span className="text-base font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-6">
                    {plan.features.slice(2, 4).map((feature, index) => (
                      <div key={index} className="flex items-center justify-start text-gray-600 gap-3">
                        <img src="../imgs/tik.png" alt="tik" className="w-5 h-5" />
                        <span className="text-base font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <button className="flex items-center justify-center gap-2 mt-8 w-full bg-red-500 text-white py-4 rounded-xl hover:bg-red-600 transition-colors font-bold text-lg">
                <img src="../imgs/coffee.png" alt="coffee icone" />
                بخریم !
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardContent;