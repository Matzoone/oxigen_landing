import { EnvelopeIcon } from "@heroicons/react/24/outline";
import {
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 md:px-12 rtl mt-60">
      <div className="container mx-auto flex flex-col md:flex-row-reverse justify-between items-center">
        {/* سمت راست: لوگو و اطلاعات */}
        <img src="../../../public/imgs/icon.png" alt="OX" className="w-1/5" />
        {/* ایمیل */}
        <div className="flex items-center text-sm">
          <EnvelopeIcon className="w-5 h-5 text-gray-400 ml-2" />
          support@ignfa.com
        </div>
        {/* سمت چپ: متن و شبکه‌های اجتماعی */}
        <div className="text-left max-w-[400px] text-right">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-xl mr-1">
              <img src="../../../public/imgs/icon.png" alt="OX" />
            </span>
            <span className="text-red-500">اکسیژن</span>
          </h3>
          <p className="text-sm mt-2 leading-relaxed">
            اکسیژن با رویکرد اتصال و اعتماد، به مشتریان خود خدمات متنوعی ارائه
            می‌دهد. در بین سرورهای مختلف از جمله آی‌پی‌های بین‌المللی، تمامی
            سرویس‌های جهانی در اختیار کاربران قرار دارد.
          </p>
          <div className="flex justify-start space-x-4 space-x-reverse mt-4 text-gray-300">
            <a href="#" className="hover:text-white text-xl">
              <FaTelegram />
            </a>
            <a href="#" className="hover:text-white text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white text-xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="text-xs text-gray-500 mt-6 text-right w-[92%] mx-auto">
        © تمامی حقوق این وب‌سایت متعلق به اکسیژن می‌باشد.
      </div>
    </footer>
  );
};

export default Footer;
