import React, { useState } from "react";
import "../output.css";
import logo from "../image/2024-12-25 16.59.03_prev_ui.png";
import openmenue from "../image/align-justify-svgrepo-com.svg";
import Modal from "./modal";

function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div dir="ltr" className="hidden max-md:block ">
      <div className="max-sm:w-full flex justify-around items-center p-5">
        <div className="w-7/12 flex justify-center items-center">
          <a
            className="pr-2 max-md:text-xs border-solid border-2 border-sky-500 rounded-2xl pl-2 pt-3 pb-3 botest font-yekan cursor-pointer"
            href=""
          >
            ورود / ثبت نام
          </a>
        </div>

        <div className="flex w-1/3 justify-center items-center h-auto max-md:w-full">
          <h1 className="new_font text-3xl max-md:text-sm  ">
            تحریم شکن اکسیژن
          </h1>
          <img
            src={logo}
            width="50px"
            height="50px"
            className="bg-blue-100 ml-2 rounded "
            alt=""
          />
        </div>

        <div className="w-1/3" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={openmenue}
            className="w-10 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-end justify-around pr-10 relative -top-5 h-auto">
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}

export default HeaderMobile;
