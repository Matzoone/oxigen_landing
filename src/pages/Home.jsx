import AppBox from "../components/AppsBox/appBox";
import Apps from "../components/carts/app/apps";
import Config from "../components/carts/config/config";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/header";
import OxTeam from "../components/OxTeam/OxTeam";
import WhyOx from "../components/whyOx/whyOx";

const Home = () => {
  return (
    <div className="h-auto">
      {/* header */}
      <div className="h-full">
        <Header />
      </div>
      {/* cards */}
      <div className="mt-40">
        {/* apps */}
        <div>
          <Apps />
        </div>
        {/* whyOx */}
        <div>
          <WhyOx />
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
