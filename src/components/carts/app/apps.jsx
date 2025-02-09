import CardContent from "../cartContent";
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
      <CardContent porps={propss} />
    </div>
  );
};

export default Apps;
