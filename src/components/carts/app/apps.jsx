import CardContent from "../cartContent";
import { ScrollButtonsWithCircle } from "../filter";
import AboutApps from "./aboutApps";

const propss = [
  {
    time: "سه ماهه",
    discount: 200000,
    price: 100000,
    props: "props",
    off: false,
    id: 0,
  },
  {
    time: "سه ماهه",
    discount: 200000,
    price: 100000,
    props: "props",
    off: true,
    id: 1,
  },
  {
    time: "سه ماهه",
    discount: 200000,
    price: 1000,
    props: "props",
    off: false,
    id: 2,
  },
];

const Apps = () => {
  return (
    <div>
      <AboutApps />
      <div className="flex flex-col items-center my-28">
        <h1 className="text-3xl max-md:text-2xl w-[calc(100% - 1rem)]">
          پلن‌های پیشنهادی ما برای شما
        </h1>
        <ScrollButtonsWithCircle />
      </div>
      <CardContent porps={propss} />
    </div>
  );
};

export default Apps;
