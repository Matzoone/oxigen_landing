import CardContent from "../cartContentApp";
import { ScrollButtonsWithCircle } from "../filter";
import AboutConfig from "./aboutConfig";
import { useState, useEffect } from "react";
import axios from "axios";

const Config = () => {

    const [plans,setPlans] = useState();
    const [currentFilter,setFilter] = useState("all");
    const [result,setResult] = useState([]);

    useEffect(() => {
        (async () => {
            await axios.get("https://oxigenplatform.site/proxy.php?method=getServices&type=v2ray").then(
                (response) => setPlans(response.data)
            ).catch((error) => console.log(error))
        })();
    },[]);

    useEffect(() => {
        currentFilter === "all" ? 
        setResult(plans) : 
        setResult(plans.filter((item) => item.duration === currentFilter));
    },[currentFilter,plans]);


    return (
        <div>
            <AboutConfig />
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

export default Config;
