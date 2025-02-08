const WhyOx = () => {
  const features = [
    {
      icon: "🌍",
      title: "دسترسی بدون محدودیت",
      description:
        "به تمامی محتواها و سرویس‌های جهانی بدون فیلتر دسترسی داشته باشید.",
    },
    {
      icon: "🚀",
      title: "سرعت بالا",
      description:
        "از سرعت فوق‌العاده برای مرور، دانلود و استریم بدون توقف لذت ببرید.",
    },
    {
      icon: "⚡",
      title: "امنیت پیشرفته",
      description:
        "با رمزگذاری AES-256 داده‌های شما در برابر حملات و جاسوسی محافظت می‌شوند.",
    },
    {
      icon: "👤",
      title: "پشتیبانی ۲۴ ساعته",
      description:
        "تیم پشتیبانی ما همیشه در کنار شماست تا به هر سوال یا مشکلی پاسخ دهد.",
    },
  ];

  return (
    <div className="py-12 text-center w-3/4 m-auto">
      <h2 className="text-2xl font-bold mb-8">چرا اکسیژن؟</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 flex flex-col items-center space-y-4 relative overflow-hidden"
          >
            {/* تصویر گوشه کارت */}
            <div
              className="absolute top-0 right-0 w-16 h-16 bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: "url('/imgs/planet-corner.png')" }}
            ></div>

            {/* آیکون */}
            <div className="text-4xl">{feature.icon}</div>

            {/* عنوان */}
            <h3 className="text-lg font-semibold text-red-500">
              {feature.title}
            </h3>

            {/* توضیحات */}
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyOx;
