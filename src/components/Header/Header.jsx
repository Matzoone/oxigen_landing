// import HeroSection from "./HeaderSection";

const Header = () => {
  return (
    <div className="bg-[url(../../../public/imgs/banner.png)] bg-cover bg-center bg-no-repeat flex items-center justify-center h-[646px]">
      <span className="absolute md:right-[4%] top-[2%] whitespace-nowrap flex gap-2 max-md:w-full max-md:justify-center">
        <img src="../../../public/imgs/icon.png" />
        <p className="text-4xl font-bold bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text max-md:hidden">
          اکسیژن
        </p>
      </span>
      {/* <HeroSection /> */}
      <div className="mt-10 flex justify-center space-x-4 gap-6 max-md:flex-col max-md:items-center bottom-[45%] absolute">
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 transition hover:scale-110 py-1 rounded-3xl font-medium">
          خرید سرور
        </button>{" "}
        <button className="border border-gray-400 text-white px-8 transition hover:scale-110 py-1 rounded-3xl font-medium hover:bg-gray-700 max-md:p-7 max-md:py-1 max-md:!m-0">
          ارتباط با پشتیبانی
        </button>
        <button className="border border-gray-400 text-white px-8 transition hover:scale-110 py-1 rounded-3xl font-medium hover:bg-gray-700 max-md:p-7 max-md:py-1 max-md:!m-0">
          تست رایگان
        </button>
      </div>
    </div>
  );
};

export default Header;
