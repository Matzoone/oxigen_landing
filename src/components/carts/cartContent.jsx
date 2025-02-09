const CardContent = ({ porps }) => {
  const about = [
    { item: "حجم نامحدود" },
    { item: "قابل استفاده در ۱ دستگاه همزمان" },
    { item: "سرورهای متعدد (۳)" },
    { item: "پشتیبانی" },
    { item: "۱۴ روز گارانتی" },
    { item: "اشتراک آی‌پی ثابت" },
  ];
  return (
    <div className="flex items-center w-[91%] m-auto flex-wrap justify-between">
      {porps.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-300 w-[calc(31%-1rem)] max-md:w-[100%] rounded-3xl shadow-lg p-6 flex flex-col items-center gap-4 m-4"
        >
          {/* time */}
          <div className="text-lg font-semibold text-gray-700 flex justify-between w-full">
            <span className="text-black font-semibold text-xl">
              {item.time}
            </span>
            {item.off && (
              <span className="bg-red-500 rounded-2xl text-white text-[.7rem] font-normal px-5 py-[2px]">
                20 % تخفیف
              </span>
            )}
          </div>
          {/* price */}
          <div className="text-lg w-full font-semibold text-gray-700 flex flex-col">
            {item.off ? (
              <span className="text-sm text-gray-500 line-through">
                {new Intl.NumberFormat("fa-IR").format(item.discount)} تومان
              </span>
            ) : (
              <span className="invisible">_</span>
            )}
            <span className="text-4xl font-bold">
              {new Intl.NumberFormat("fa-IR").format(item.price)} تومان
            </span>
          </div>
          {/* buy */}
          <div className="text-lg w-full font-semibold text-gray-700">
            <button
              className={`rounded-xl w-full py-3 font-semibold hover:scale-105 transition ${
                item.off ? "text-white bg-red-500" : "border border-black"
              }`}
            >
              خرید پلن {item.time}
            </button>
          </div>
          {/* جدا کننده */}
          <div className="flex justify-center space-x-2 items-center">
            <div className="border-t-2 border-gray-400 w-[12vh]"> </div>
            <span className="text-center text-gray-400 !mx-2">
              ویژگی‌های پلن
            </span>
            <div className="border-t-2 border-gray-400 w-[12vh]"> </div>
          </div>
          {/* about */}
          <div className="text-lg w-full font-semibold text-gray-700">
            {about.map((item, index) => (
              <div
                key={item.item}
                className={`text-black font-semibold flex gap-3 ${
                  index !== 0 && "mt-6"
                } ${index === about.length - 1 && "my-6"}`}
              >
                <img src="../../../public/imgs/tik.png" className="max-h-max" />{" "}
                {item.item}
              </div>
            ))}
          </div>
          {/* OX */}
          <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text font-semibold text-2xl">
            اکسیژن
          </span>
        </div>
      ))}
    </div>
  );
};

export default CardContent;
