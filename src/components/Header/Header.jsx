import HeroSection from "./HeaderSection";

const Header = () => {
  return (
    <div className="bg-[url(../../../public/imgs/planet.png)] bg-cover bg-center bg-no-repeat flex items-center justify-center h-[646px]">
      <span className="absolute right-[4%] top-[2%] whitespace-nowrap flex gap-2">
        <img src="../../../public/imgs/icon.png" />
        <p className="text-4xl font-bold bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text">
          اکسیژن
        </p>
      </span>
      <HeroSection />
    </div>
  );
};

export default Header;
