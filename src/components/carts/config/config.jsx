import CardContent from "../cartContent";
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
];

const Config = () => {
  return (
    <div>
      <AboutConfig />
      <CardContent porps={propss} />
    </div>
  );
};

export default Config;
