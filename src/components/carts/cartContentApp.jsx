import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Plan = ({ plan , v2ray=false }) => {

    const planBuyHandler = () => {
        window.location.href = 
        "https://seepay.site/seeads/payment/checkout.php?source=seeads&service_id=" + plan.id
    }

    let features = [
        "حجم نامحدود",
        "بیش از 12 سرور پر سرعت",
        "پشتیبانی 24 ساعته",
        "۱۴ روز گارانتی",
        "اشتراک آی‌پی ثابت",
        "ضمانت بازگشت وجه"
    ]

    if (v2ray) {
        features = features.filter((item) => item != "حجم نامحدود")
    }
    return (
        <div className="bg-[#FFF0F0] rounded-3xl p-8 flex flex-col
         h-fit shadow-lg w-80 border border-gray-400 ">
            <div className="text-center">
                <h3 className="text-2xl text-red-700 font-semibold mb-10">
                    {
                        v2ray ?
                        plan.size + " گیگ " + plan.duration / 30 + " ماهه" : 
                        plan.title_fa
                    }
                </h3>
                {/* <p className="text-gray-800 font-semibold mb-5">{plan.subtitle}</p> */}
                <div className="flex flex-col items-center mb-6">
                    {
                        plan.original_price && 
                        <span className="text-gray-600 line-through text-sm mb-1 mt-2">
                        {plan.original_price} تومان</span>
                    }
                    <span className="text-4xl font-bold mt-8">{plan.cost.toLocaleString()} تومان</span>
                </div>
            </div>

            <img src="../imgs/line.png" alt="line" className="mb-8 mt-4" />

            <div className="flex-grow">
                <h4 className="text-gray-800 font-bold mb-8 text-center">ویژگی‌ها</h4>
                <div className="grid grid-cols-1 gap-x-6 gap-y-6">
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center justify-start text-gray-600 gap-3">
                                <img src="../imgs/tik.png" alt="tik" className="w-5 h-5" />
                                <span className="text-base font-semibold">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button className="flex items-center justify-center gap-2 mt-8 w-full 
            bg-red-500 text-white py-4 rounded-xl hover:bg-red-600 transition-colors font-bold text-lg"
            onClick={() => planBuyHandler()}>
                <img src="../imgs/coffee.png" alt="coffee icone" />
                بخریم !
            </button>
        </div>
    )
};

const CardContent = ( { plans , v2ray=false } ) => {

    const [result,setResult] = useState([]);

    useEffect(() => {
        plans && setResult(plans)
    },[plans]);

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
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                {result.map((plan, index) => (
                    <SwiperSlide key={index} className="mb-20">
                        <Plan plan={plan} v2ray={v2ray}  />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardContent;