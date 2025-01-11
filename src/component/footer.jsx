import React from "react";
import logo from "../image/2024-12-25 16.59.03_prev_ui.png";
import "../output.css";
import message from "../icon/icon (1).svg";
import call from "../icon/icon (2).svg";
import email from "../icon/icon.svg";
import ruls from "../icon/creative-commons.svg";

export default function Footer() {
  return (
    <>
      <div className="max-sm:w-full mt-10 flex-col  w-full flex justify-around items-center h-auto  pt-6 pr-1 pl-1 max-lg:flex-col max-sm:flex-col bg-image-footer">
        <div className="w-4/5 max-lg:flex-col max-lg:justify-around  flex border-solid border p-5 flex-wrap border-white rounded-2xl justify-around items-center h-auto">
          <div className="w-1/4 max-lg:border-r-2  max-lg:pl-8 flex-wrap max-lg:w-full h-auto border-l-2 flex justify-around items-center pl-9 ">
            <div>
              <img src={email} alt="" />
            </div>
            <div className="flex flex-col w-1/2 h-auto items-center max-xl:text-xs ">
              <p className="text-white new_font"> ارتباط با ما</p>
              <p className="text-white new_font">0912-3456789</p>
            </div>
          </div>
          <div className="w-1/4 max-lg:border-r-2 max-lg:pl-8 max-lg:w-full max-lg:mt-8 flex-wrap h-auto border-l-2 flex justify-around items-center pl-9 ">
            <div>
              <img src={message} alt="" />
            </div>
            <div className="flex max-lg:pl-8 max-xl:text-xs flex-col w-1/2 h-auto items-center">
              <p className="text-white new_font">ایمیل</p>
              <p className="text-white new_font">support1@info.com</p>
            </div>
          </div>
          <div className="w-1/4 max-lg:border-r-2  max-lg:pl-8 max-lg:mt-8 max-lg:w-full flex-wrap h-auto border-l-2 flex justify-around items-center pl-9 ">
            <div>
              <img src={call} alt="" />
            </div>
            <div className="flex flex-col max-xl:text-xs w-1/2 h-auto items-center">
              <p className="text-white new_font">آدرس</p>
              <p className="text-white new_font">گلستان - گرگان</p>
            </div>
          </div>
        </div>
        <div className="w-4/5 flex max-sm:flex-col  justify-around items-center h-auto p-8 border-b-2">
          <div className="flex w-1/4 flex-col max-sm:w-full h-auto">
            <p className="font-yekan text-white max-lg:text-sm max-sm:text-xs max-lg:leading-9 leading-9 text-sm">
              اکسیژن با رویکرد اعتماد به مشتری، با در اختیار داشتن متنوع ترین
              سرور ها متشکل از انواع آی پی های اقتصادی تا تجاری در سراسر کشور
              ایران آماده خدمت‌رسانی به مشتریان است.
            </p>
          </div>
          <div className="flex max-sm:w-full w-1/4 flex-col max-sm:mt-8 h-auto items-center">
            <p className="new-font text-lg text-white">دسترسی آسان</p>
            <a className="font-yekan text-sm text-white mt-8" href="">
              {" "}
              سوالات متداول
            </a>
            <a className="font-yekan text-sm text-white mt-8" href="">
              تماس با ما
            </a>
            <a className="font-yekan text-sm text-white mt-8" href="">
              محصولات
            </a>
          </div>
          <div className="flex w-1/4 max-sm:w-full flex-col h-auto">
            <a
              className="pl-1 flex items-center justify-center max-lg:pr-10 max-sm:pr-5 pr-1 pt-4 pb-4 rounded-3xl bg-blue-500 text-white new_font testserver mt-4 text-lg"
              href="#"
            >
              اپ ویندوز
            </a>
            <a
              className="pl-1 flex items-center justify-center max-lg:pr-10 max-sm:pr-5 pr-1 pt-4 pb-4 rounded-3xl bg-blue-500 text-white new_font testserver mt-4 text-lg"
              href="#"
            >
              اپ ایفون
            </a>
            <a
              className="pl- flex items-center justify-center max-lg:pr-10 max-sm:pr-5 pr-1 pt-4 pb-4 rounded-3xl bg-blue-500 text-white new_font testserver mt-4 text-lg"
              href="#"
            >
              اپ اندروید
            </a>
          </div>
        </div>
        <div className="flex w-full pr-36 mt-8 mb-7 text-sm max-md:pr-0 max-md:justify-center ">
          <img src={ruls} alt="" />
          <p className="text-white new-font mr-3">
            تمامی حقوق این وبسایت متعلق به اکسیژن می‌باشد
          </p>
        </div>
      </div>
    </>
  );
}
