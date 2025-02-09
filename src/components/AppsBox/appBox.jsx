const AppBox = () => {
  return (
    <div>
      <div className="bg-[url(../../../public/imgs/apps.png)] h-full w-[95%] mt-60 mx-auto">
        <div className="flex flex-col items-center">
          <img
            src="../../../public/imgs/icon.png"
            className="mt-40 w-20"
            alt=""
          />
          <span className="my-10 bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text font-semibold text-4xl">
            اکسیژن
          </span>
          <span className="md:mt-10 text-4xl max-md:text-2xl max-md:w-3/4 text-center font-extrabold">
            دسترسی بی‌حد و مرز به اینترنت، بدون محدودیت
          </span>
          <span className="mt-10 text-lg text-gray-500 max-md:hidden">
            همین حالا اپلیکیشن را دریافت کنید و از هر کجا به محتواهای مورد
            علاقه‌تان دسترسی داشته باشید
          </span>
          <div className="flex w-full flex-wrap max-md:gap-5 max-md:my-10 md:gap-8 md:justify-center">
            <a
              className="bg-red-500 rounded-lg flex w-[10%] max-md:w-3/4 m-auto md:m-0 text-white hover:scale-105 transition justify-center py-1"
              href="#"
            >
              اپ icon
            </a>
            <a
              className="bg-red-500 rounded-lg flex w-[10%] max-md:w-3/4 m-auto md:m-0 text-white hover:scale-105 transition justify-center py-1"
              href="#"
            >
              اپ icon
            </a>
            <a
              className="bg-red-500 rounded-lg flex w-[10%] max-md:w-3/4 m-auto md:m-0 text-white hover:scale-105 transition justify-center py-1"
              href="#"
            >
              اپ icon
            </a>
            <a
              className="bg-red-500 rounded-lg flex w-[10%] max-md:w-3/4 m-auto md:m-0 text-white hover:scale-105 transition justify-center py-1"
              href="#"
            >
              اپ icon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBox;
