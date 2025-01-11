import React, { useState } from "react";
import ReactDOM from "react-dom";
import logo from "../image/2024-12-25 16.59.03_prev_ui.png";
import exiticone from "../image/close.png";

const Modal = ({ isOpen, onClose }) => {
  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      className={`modal w-full h-full hidden max-md:flex justify-end items-center bg-opacity-50 transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className="modal-content hidden max-md:block -mr-5"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="mr-0 p-4 flex flex-col -m-5 h-full items-center justify-start bg-violet-800 text-white rounded-l-full ">
          <img
            className="ml-32 w-2/12 cursor-pointer"
            src={exiticone}
            onClick={onClose}
          />

          <img src={logo} className="w-1/2" alt="" />
          <li className="mt-7 mr-0">
            <a className="cursor-pointer font-yekan mr-0 max-sm:text-sm  -top-2">
              سرویس حجمی
            </a>
          </li>
          <li className="mt-7 mr-0">
            <a className="cursor-pointer font-yekan mt-11 max-sm:text-sm  top-1">
              سرویس اختصاصی
            </a>
          </li>
          <li className="mt-7 mr-0">
            <a className="cursor-pointer font-yekan mt-11 max-sm:text-sm  top-1">
              دانلود اپ ایفون
            </a>
          </li>
          <li className="mt-7 mr-0">
            <a className="cursor-pointer font-yekan mt-11 max-sm:text-sm  top-1">
              دانلود اپ ویندوز
            </a>
          </li>
          <li className="mt-7 mr-0">
            <a className="cursor-pointer font-yekan mt-11 max-sm:text-sm  top-1">
              {" "}
              دانلود اپ اندروید
            </a>
          </li>
          <li className="mt-7 mr-0">
            <a className="cursor-pointer font-yekan mt-11 max-sm:text-sm  top-1">
              تماس با ما
            </a>
          </li>
        </ul>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
