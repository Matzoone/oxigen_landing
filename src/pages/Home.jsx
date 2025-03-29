import { useRef } from "react";
import AppBox from "../components/AppsBox/appBox";
import Apps from "../components/carts/app/apps";
import Config from "../components/carts/config/config";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import OxTeam from "../components/OxTeam/OxTeam";
import WhyOx from "../components/whyOx/whyOx";

const Home = () => {
  const appsRef = useRef(null);

  const handleScrollToApps = () => {
    if (appsRef.current) {
      appsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="h-auto bg-gradient-to-b from-[#FFE4E4] to-[#FCFCFC]">
      {/* header */}
      <div className="h-full">
        <Header onBuyClick={handleScrollToApps} />
      </div>
      {/* garanty */}
      {/* cards */}
      <div >
        {/* apps */}
        <div ref={appsRef}>
          <Apps />
        </div>
        {/* config */}
        <div>
          <Config />
        </div>
      </div>
      {/* apssBox */}
      <div>
        <AppBox />
      </div>
      {/* whyOx */}
      <div>
        <WhyOx />
      </div>
      {/* OxTeam */}
      <div>
        <OxTeam />
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
