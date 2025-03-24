import { useEffect, useState } from "react";
import CardContent from "../cartContentApp";
import { ScrollButtonsWithCircle } from "../filter.jsx";
import AboutApps from "./aboutApps";
import axios from "axios";

const Apps = ({ appsRef }) => {
    const [Plan, setPlan] = useState([]);
    const [currentFilter, setFilter] = useState("all");
    const [result,setResult] = useState([]);

    useEffect(() => {
        (async () => {
            await axios.get("https://oxigenplatform.site/proxy.php?method=getServices").then(
                (response) => setPlan(response.data)
            ).catch((error) => console.log(error.response.data))
        })()
    }, []);

    useEffect(() => {
        currentFilter === "all"  ? 
        setResult(Plan) : 
        setResult((Plan.filter((item) => item.duration === currentFilter)))
    },[Plan,currentFilter]);

    return (
        <div ref={appsRef}>
            <AboutApps />
            <div className="flex flex-col items-center my-8 max-md:mb-8">
                <h1 className="text-3xl max-md:text-2xl w-[calc(100% - 1rem)]">
                    پلن‌های پیشنهادی ما برای شما
                </h1>
                <ScrollButtonsWithCircle
                    currentFilter={currentFilter}
                    setFilter={setFilter}
                />
            </div>
            <CardContent plans={result} />
        </div>
    );
};

export default Apps;
