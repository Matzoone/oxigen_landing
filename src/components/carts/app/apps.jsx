import { useEffect, useState } from "react";
import CardContent from "../cartContentApp";
import { ScrollButtonsWithCircle } from "../filter";
import AboutApps from "./aboutApps";

const Apps = ({ appsRef }) => {
  const [Plan, setPlan] = useState([]);
  const [filteredPlan, setFilteredPlan] = useState([]);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await fetch("https://api.parazitapp.fun/getServices");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Raw Data from API:", data);

        if (!Array.isArray(data)) {
          console.error("Data is not an array:", data);
          return;
        }

        const formattedPlan = data.map((service) => ({
          time: service.title_fa.trim().replace("-", ""),
          discount: parseInt(service.original_price),
          price: parseInt(service.cost),
          duration: service.duration,
          props: "props",
          off: parseInt(service.original_price) > parseInt(service.cost),
          id: service.id,
        }));

        console.log("Formatted Plan:", formattedPlan);

        setPlan(formattedPlan);
        setFilteredPlan(formattedPlan);
      } catch (error) {
        console.error("Error fetching Plan:", error);
        setPlan([]);
        setFilteredPlan([]);
      }
    };

    fetchPlan();
  }, []);

  return (
    <div ref={appsRef}>
      <AboutApps />
      <div className="flex flex-col items-center my-8 max-md:mb-8">
        <h1 className="text-3xl max-md:text-2xl w-[calc(100% - 1rem)]">
          پلن‌های پیشنهادی ما برای شما
        </h1>
        <ScrollButtonsWithCircle
          products={Plan}
          onFilterChange={(filtered) => setFilteredPlan(filtered)}
        />
      </div>
      <CardContent props={filteredPlan} />
    </div>
  );
};

export default Apps;
