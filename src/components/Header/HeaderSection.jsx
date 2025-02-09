const HeroSection = () => {
  return (
    <div className="flex items-center justify-center h-screen relative">
      {/* لایه‌ی شفاف و شیشه‌ای */}
      <div className="relative z-10 md:backdrop-blur-lg backdrop-blur-sm md:bg-white/10 rounded-2xl p-8 max-w-3xl text-center text-white md:shadow-lg">
        <p className="text-gray-300 text-lg">
          مفتخریم به اینکه بیش از <span className="font-bold">۷,۰۰۰</span> کاربر
          به ما اعتماد کرده‌اند
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          <span className="bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text">
            اکسیژن
          </span>{" "}
          اتصال سریع، ایمن و بدون محدودیت
        </h1>
        <p className="text-gray-200 mt-4 text-sm">
          با سرعت بالا، حریم خصوصی قدرتمند، و دسترسی به تمامی محتواهای جهانی،
          تجربه‌ای بی‌نقص داشته باشید
        </p>
        <div className="mt-6 flex justify-center space-x-4 gap-6 max-md:flex-col max-md:items-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 transition hover:scale-110 py-1 rounded-3xl font-medium">
            خرید سرور
          </button>
          <button className="border border-gray-400 text-white px-8 transition hover:scale-110 py-1 rounded-3xl font-medium hover:bg-gray-700 max-md:p-7 max-md:py-1 max-md:!m-0">
            تست رایگان
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
