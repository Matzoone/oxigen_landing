const Header = ({ onBuyClick }) => {
    return (
        <div className="relative w-full h-screen">
            <div className="relative w-full h-full bg-slate-900">
                <div className="flex justify-center gap-2 z-50 absolute top-4 right-20">
                    <img src="../imgs/logo1.png" className="w-10" alt="Oxygen" />
                    <span className="bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text text-2xl font-bold">اکسیژن</span>
                </div>
                {/* <img
                    src="../imgs/baner1.png"
                    className="max-md:block hidden absolute top-0 left-0 w-full h-auto object-cover object-top"
                    alt="Mobile Banner"
                /> */}
                <img
                    src="../imgs/Banner.png"
                    className="md:block hidden absolute top-0 left-0 w-full h-full object-cover"
                    alt="Desktop Banner"
                />
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white p-4">
                <div className="bg-opacity-50 backdrop-blur p-6 rounded-xl h-[50%] w-[90%]">
                    <h1 className="text-4xl font-bold md:text-5xl">
                        <span className="text-red-500">اکسیژن</span> اتصال سریع، ایمن و بدون محدودیت
                    </h1>
                    <p className="mt-4 text-lg max-md:text-sm">
                        با سرعت بالا، حریم خصوصی قدرتمند و دسترسی به تمامی محتواهای جهانی، تجربه‌ای بی‌نقص داشته باشید
                    </p>
                    <div className="flex gap-4 mt-12 justify-center">
                        <button
                            onClick={onBuyClick}
                            className="bg-gradient-to-r px-10 py-2 rounded-3xl font-semibold transition hover:scale-110 max-md:px-4 max-md:py-2 max-md:text-xs bg-red-500" style={{ background: "#FF4D4D" }}
                        >
                            خرید سرور
                        </button>
                        <button
                            onClick={() => (window.location.href = "https://t.me/Oxigenserver2bot")}
                            className="bg-gradient-to-r px-10 py-2 rounded-3xl font-semibold transition hover:scale-110 max-md:px-4 max-md:py-2 max-md:text-xs border border-red-500 !bg-red-300 text-red-950"
                        >
                            تست رایگان
                        </button>
                        <button
                            onClick={() => (window.location.href = "https://t.me/oxigen_sup")}
                            className="bg-gradient-to-r px-10 py-2 rounded-3xl font-semibold transition hover:scale-110 max-md:px-4 max-md:py-2 max-md:text-xs bg-red-500" style={{ background: "#FF4D4D" }}
                        >
                            ارتباط با پشتیبانی
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
