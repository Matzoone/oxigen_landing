import React from "react";
import logo from '../image/2024-12-25 16.59.03_prev_ui.png';
import "../output.css";


export default function Footer() {

    return (
        <>
            <div className="max-sm:w-full mt-10 bg-violet-800 rounded-t-2xl w-full  flex flex-col justify-around items-center h-auto pt-6 pr-1 pl-1 max-lg:flex-row max-sm:flex-col max-2xl:flex-row">
                <div className="max-sm:w-full w-1/3  max-2xl:h-80 flex flex-col items-center bg-gradient-to-t from-cyan-400 to-blue-400 rounded-3xl">
                    <img src={logo} className="w-1/3" alt="" />
                    <p className="font-yekan p-5 leading-10 text-white">
                        با استفاده از اکسیژن شبکه ای را برای تمام نیازهای
                        خود با سهولت و سرگرمی فراهم کنید، ویژگی های
                        جالبی را از ما کشف کنید.
                    </p>
                </div>
                <div className="w-1/4 max-sm:w-full max-2xl:h-80 flex flex-col items-center bg-gradient-to-t from-cyan-400 to-blue-400 bg-violet-800 rounded-3xl p-6 mt-2 ">
                    <li className="mt-8 list-none"><a className="text-xl max-lg:text-base text-white font-yekan" href="">سرویس حجمی</a></li>
                    <li className="mt-8 list-none"><a className="text-xl max-lg:text-base  text-white font-yekan" href="">سرور اختصاصی</a></li>
                    <li className="mt-8 list-none"><a className="text-xl max-lg:text-base  text-white font-yekan" href="">دانلود اپ</a></li>
                    <li className="mt-8 list-none"><a className="text-xl max-lg:text-base  text-white font-yekan" href="">ورود و ثبت نام</a></li>
                </div>
                <div className="w-1/3 max-sm:w-full max-2xl:h-80 flex flex-col items-center bg-gradient-to-t from-cyan-400 to-blue-400 bg-violet-800 rounded-3xl p-6 mt-2">
                    <a className="pl-20 pr-20 max-lg:pr-12 max-lg:pl-12 max-sm:text-lg max-sm:pl-16 max-sm:pr-16 pt-4 pb-4 rounded-3xl bg-blue-500 text-white new_font testserver  text-xl max-md:pr-4 max-md:pl-4" href="#">دانلود اپ ویندوز</a>
                    <a className="pl-20 max-lg:pr-12 max-lg:pl-12 pr-20 max-sm:text-lg max-sm:pl-16 max-sm:pr-16 pt-4 pb-4 rounded-3xl bg-blue-500 text-white new_font testserver max-md:pr-4 max-md:pl-4 mt-10 text-xl" href="#">دانلود اپ ایفون</a>
                    <a className="pl-20 max-lg:pr-12 max-lg:pl-12 pr-20 max-sm:text-lg max-sm:pl-16 max-sm:pr-16 pt-4 pb-4 rounded-3xl bg-blue-500 text-white new_font testserver max-md:pr-4 max-md:pl-4 mt-10 text-xl" href="#">دانلود اپ اندروید</a>
                </div>
            </div>
        </>
    )

}
