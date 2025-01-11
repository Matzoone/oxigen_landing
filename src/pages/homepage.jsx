import React, { useRef } from "react";
import "../output.css";
import logo from "../image/2024-12-25 16.59.03_prev_ui.png";
import contentimage from "../image/ezgif-7-8771449284_prev_ui.png";
import svg from "../image/svg.png";
import vipimage from "../image/vipimage.png";
import Slider from "../component/slider";
import SliderVolume from "../component/slidervolumes";
import proudactwhy from "../image/Group 4.png";
import HeaderMobile from "../component/hedaermobail";
import Footer from "../component/footer";

function Homepage() {
  const logohedaer = logo;
  const svgfooter = svg;
  const contentimg = contentimage;
  const imagevip = vipimage;
  const purchaseSectionRef = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const handlePurchaseClick = () => {
    purchaseSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToSection2 = () => {
    section2Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToSection3 = () => {
    section3Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div dir="rtl">
      <HeaderMobile />
      <div className="justify-between h-auto w-full mt-10 items-start flex max-sm:flex-col max-md:hidden">
        <div className="h-9 w-full flex items-center justify-center  max-sm:flex-col max-sm:w-full">
          <div className="flex justify-center items-center w-2/6 h-auto mr-10 max-sm:w-full">
            <img src={logohedaer} width="50px" height="50px" alt="" />
            <h1 className="new_font text-3xl max-sm:text-xl max-lg:text-xl">
              تحریم شکن اکسیژن
            </h1>
          </div>
          <ul className="w-3/5 flex items-center justify-around max-sm:w-full">
            <li>
              <a
                className="font-yekan mr-0 max-sm:text-xs max-lg:text-xs"
                onClick={handlePurchaseClick}
              >
                سرویس حجمی
              </a>
            </li>
            <li>
              <a
                className="font-yekan max-sm:text-xs  max-lg:text-xs"
                onClick={handleScrollToSection2}
                name="#placev"
                href="#vip"
              >
                سرویس اختصاصی
              </a>
            </li>
            <li>
              <a
                className="font-yekan max-sm:text-xs  max-lg:text-xs"
                onClick={handleScrollToSection3}
                href="#fot"
              >
                تماس با ما
              </a>
            </li>
            <a className="pr-12 max-sm:text-xs max-lg:pr-6 max-lg:pl-6   max-lg:text-xs border-solid border-2 border-sky-500 rounded-3xl pl-12 pt-3 pb-3 botest font-yekan cursor-pointer">
              {" "}
              ورود / ثبت نام
            </a>{" "}
          </ul>
        </div>
      </div>
      <div className="flex w-full pb-12 items-center justify-around h-auto mr-32 mt-32 max-sm:mt-10 max-lg:mt-16 max-lg:flex-col pr-9 bg-image max-sm:flex-col max-sm:mr-0 max-sm:items-center max-sm:justify-around max-sm:w-full max-xl:mr-0">
        <div className="w-1/2 max-sm:w-full h-96 flex flex-col items-start justify-around">
          <h2 className="new_font max-lg:text-3xl max-lg:mt-28 text-3xl mr-28 mt-28 text-white max-sm:text-2xl max-sm:mr-0 max-sm:mt-32">
            {" "}
            <span className="text-purple-300 test-shadow">
              {" "}
              با VPN اکسیژن
            </span>{" "}
            <span>آسان باشید</span>{" "}
          </h2>
          <p className="font-yekan2mt-7 mr-24  text-white font-yekan leading-10 max-sm:mr-0 max-sm:text-sm max-sm:leading-9">
            با استفاده از اکسیژن شبکه ای را برای تمام نیازهای <br /> خود با
            سهولت و سرگرمی فراهم کنید، ویژگی های <br /> جالبی را از ما کشف کنید.
          </p>
          <a
            className="pl-28 max-lg:items-center max-sm:mr-0 max-sm:pl-16 max-sm:pr-16 max-lg:pr-14 max-lg:pl-14 pr-28 pt-4 mr-24  pb-4 boxshadow rounded-3xl bg-gradient-to-r from-white to-violet-400 text-violet-800	 new_font testserver mt-10 max-sm:text-base text-xl"
            href="#"
          >
            دریافت سرور تستی
          </a>
        </div>

        <div className="w-1/2 max-sm:hidden max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:ml-0 h-auto flex flex-col max-xl:items-start items-end justify-around">
          <img
            className=" max-lg:mt-48 img-fix ml-56 mb-6 max-sm:ml-0 max-sm:mb-0 max-sm:mt-12"
            src={contentimage}
            alt=""
          />
        </div>
      </div>
      <div className="mt-40 text-3xl max-lg:mt-9 max-sm:text-2xl w-full flex max-sm:mt-32 items-center justify-center">
        <h2
          ref={section2Ref}
          id="section-2"
          className="new_font ml-9 max-sm:ml-0"
        >
          <a> سرویس اپ اختصاصی اکسیژن</a>
        </h2>
      </div>
      <div className="carsoules w-full mt-10 ">
        <Slider />
      </div>
      <div className="why_by_us flex w-full max-sm:flex-col max-sm:items-center justify-around items-center mt-28">
        <div className="w-1/2 max-sm:w-full flex flex-col items-start mr-36 max-sm:items-center max-sm:mr-0">
          <span className="new_font text-4xl text-purple-800 max-sm:text-2xl">
            چرا سرویس اپ اختصاصی اکسیژن؟
          </span>
          <span className="font-yekan text-2xl max-sm:text-lg mt-7">
            1.دارای حجم نامحدود
          </span>
          <span className="font-yekan text-2xl max-sm:text-lg mt-7">
            2.بیش از 100 سرور پرسرعت از 30 کشور متفاوت
          </span>
          <span className="font-yekan text-2xl max-sm:text-lg mt-7">
            3. اتصال خودکار به بهترین سرور
          </span>
          <span className="font-yekan text-2xl max-sm:text-lg mt-7">
            4. مخصوص کاربران اندروید
          </span>
          <a
            className="pl-10 flex items-center justify-center pr-10 pt-4 pb-4 rounded-3xl bg-blue-500 text-white new_font testserver mt-10 text-xl"
            href="#"
          >
            پشتیبانی تلگرام
          </a>
        </div>
        <div className="w-1/2  max-sm:w-full max-sm:items-center max-sm:mt-10 flex flex-col items-start">
          <img src={vipimage} width={"80%"} alt="" />
        </div>
      </div>
      <div
        ref={purchaseSectionRef}
        id="purchase-section"
        className="mt-40 max-lg:mt-9 max-sm:text-lg max-sm:mt-32 text-3xl w-full flex items-center justify-center"
      >
        <h2 className="new_font ml-9 max-sm:ml-0">
          <a href="" name="volume">
            سرویس اپ حجمی برای ایفون و اندروید اکسیژن
          </a>
        </h2>
      </div>
      <div className="mt-16">
        <SliderVolume />
      </div>
      <div className="why_by_us flex w-full max-sm:flex-col max-sm:items-center justify-around items-center mt-28">
        <div className="w-1/2 flex flex-col items-start mr-36 max-sm:mr-0 max-sm:w-full max-sm:items-center">
          <span className="new_font text-4xl text-purple-800 max-sm:text-2xl">
            چرا سرویس اپ حجمی اکسیژن؟
          </span>
          <span className="font-yekan text-2xl max-sm:text-base mt-7">
            1. به صورت جمعی و با تعداد کاربر نامحدود
          </span>
          <span className="font-yekan text-2xl max-sm:text-base mt-7">
            2. امکان اتصال با چندید دستگاه به صورت همزمان
          </span>
          <span className="font-yekan text-2xl max-sm:text-base mt-7">
            3.کانفیگ اختصاصی بدون قطعی و افت سرعت
          </span>
          <span className="font-yekan text-2xl max-sm:text-base mt-7">
            4. متناسب برای کاربران آیفون، ویندوز و اندروید
          </span>
          <a
            className="pl-10 flex items-center justify-center pr-10 max-sm:text-lg max-sm:pl-16 max-sm:pr-16 pt-4 pb-4 rounded-3xl bg-blue-500 text-white new_font testserver mt-10 text-xl"
            href="#"
          >
            جهت تمیدید خودکار کلیک کنید
          </a>
        </div>
        <div className="w-1/2 max-sm:w-full flex flex-col items-start max-sm:mt-12">
          <img src={proudactwhy} width={"80%"} alt="" />
        </div>
      </div>
      <div ref={section3Ref} id="purchase-section">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
