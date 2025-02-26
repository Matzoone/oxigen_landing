const AppBox = () => {
  return (
    <div className="bg-[#F9F5FF] py-12 mt-20">
      <div className="bg-[url(../imgs/apps.png)] bg-no-repeat bg-center bg-cover w-[95%] p-10 min-h-[80vh] m-auto">
        <div className="flex flex-col items-center">
          <img src="../imgs/icon.png" className="mt-40 w-20" alt="" />
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
          <div className="flex w-full flex-wrap gap-5 my-10 lg:my-20">
            <div className="grid w-full md:grid-cols-2 lg:flex lg:justify-center lg:gap-8 gap-4">
              <a
                className="bg-red-500 rounded-lg flex w-full lg:w-[17%] text-white hover:scale-105 transition justify-center py-2 gap-2"
                href="https://oxigenplatform.site/apk/oxigen.apk"
              >
                دانلود اپ اکسیژن
                <img className="w-6 h-6" src="../imgs/phone.png" alt="phone" />
              </a>
              <a
                className="bg-red-500 rounded-lg flex w-full lg:w-[17%] text-white hover:scale-105 transition justify-center py-2 gap-2"
                href="https://github.com/2dust/v2rayN/releases/download/6.27/zz_v2rayN-With-Core-SelfContained.7z"
              >
                دانلود v2ray ویندوز
                <img className="w-6 h-6" src="../imgs/Path.png" alt="windows" />
              </a>
              <a
                className="bg-red-500 rounded-lg flex w-full lg:w-[17%] text-white hover:scale-105 transition justify-center py-2 gap-2"
                href="https://github.com/2dust/v2rayNG/releases/download/1.8.9/v2rayNG_1.8.9.apk"
              >
                دانلود v2ray اندروید
                <img
                  className="w-6 h-6"
                  src="../imgs/android.png"
                  alt="android"
                />
              </a>
              <a
                className="bg-red-500 rounded-lg flex w-full lg:w-[17%] text-white hover:scale-105 transition justify-center py-2 gap-2"
                href="https://apps.apple.com/us/app/v2box-v2ray-client/id6446814690"
              >
                دانلود v2ray آیفون
                <img className="w-6 h-6" src="../imgs/Apple.png" alt="apple" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBox;
