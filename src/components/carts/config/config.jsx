import CardContent from "../cartContent";
import { ScrollButtonsWithCircle } from "../filter";
import AboutConfig from "./aboutConfig";

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
  {
    time: "سه ماهه",
    discount: 200000,
    price: 1000,
    props: "props",
    off: false,
    id: 3,
  },
  {
    time: "سه ماهه",
    discount: 200000,
    price: 1000,
    props: "props",
    off: false,
    id: 4,
  },
  {
    time: "سه ماهه",
    discount: 200000,
    price: 1000,
    props: "props",
    off: true,
    id: 5,
  },
  {
    time: "سه ماهه",
    discount: 200000,
    price: 1000,
    props: "props",
    off: false,
    id: 6,
  },
];

const Config = () => {
  return (
    <div>
      <AboutConfig />
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

export default Config;
