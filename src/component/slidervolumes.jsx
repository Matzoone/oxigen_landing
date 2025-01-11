import React from "react";
import proudactimage from '../image/web-browser-with-protection-shield-check-mark-isolated-computer-network-security-icon-3d-rende_570783-1861_prev_ui.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function SliderVolume() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        desktop2: {
            breakpoint: { max: 1341, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        tablet2: {
            breakpoint: { max: 650, min: 0 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const VipProudact = [
        {
            time: "یک ماهه",
            Volume: 'نامحدود',
            prices: "۹۹ هزارتومان",
            userNumber: "تک کاربره",
            systems: "اندروید",
        },
        {
            time: " یک ماهه",
            Volume: 'نامحدود',
            prices: "۱۶۹ هزارتومان",
            userNumber: "دو کاربره",
            systems: "اندروید",
        },
        {
            time: "سه ماهه",
            Volume: 'نامحدود',
            prices: "۲۴۹ هزارتومان",
            userNumber: "تک کاربره",
            systems: "اندروید",
        },
        {
            time: "سه ماهه",
            Volume: 'نامحدود',
            prices: "۳۹۹ هزارتومان",
            userNumber: "دو کاربره",
            systems: "اندروید",
        },
        {
            time: "شیش ماهه",
            Volume: 'نامحدود',
            prices: "۴۴۹ هزارتومان",
            userNumber: "تک کاربره",
            systems: "اندروید",
        },

    ]

    return (
        <>
          <Carousel showDots={true}  responsive={responsive}>
            {VipProudact.map((product, index) => (
              <div key={index} className="w-72 h-auto max-sm:ml-7 flex flex-col items-center bg-violet-100 rounded-3xl test">
                <img src={proudactimage} className="w-1/2 mt-3" alt="" />
                <span key={`${index}-time`} className="mt-6 new_font text-black ">{product.time}</span>
                <span key={`${index}-volume`} className="mt-6 font-yekan text-black">{product.Volume}</span>
                <span key={`${index}-price`} className="mt-6 font-yekan text-black">{product.prices}</span>
                <span key={`${index}-price`} className="mt-6 font-yekan text-black">{product.userNumber}</span>
                <span key={`${index}-system`} className="mt-6  mb-5 font-yekan text-black">{product.systems}</span>
                <a className="pl-14 z-20 pr-14 pt-3 pb-3 boxshadow rounded-2xl bg-violet-700  text-white mb-4 mt-3 new_font testserver text-sm" href="">خرید محصول</a>
              </div>
            ))}
          </Carousel>
        </>
      );
}
