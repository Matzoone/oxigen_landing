import CardContent from "../cartContentV2";
import { ScrollButtonsWithCircle } from "../filter";
import AboutConfig from "./aboutConfig";
import { useState, useEffect } from "react";

const Config = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "https://api.parazitapp.fun/getServices?type=v2ray"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          return;
        }

        const formattedServices = data.map((service) => ({
          time: service.title_fa.split("-")[0].trim(),
          discount: parseInt(service.original_price),
          price: parseInt(service.cost),
          duration: service.duration,
          props: "props",
          off: parseInt(service.original_price) > parseInt(service.cost),
          id: service.id,
        }));

        setServices(formattedServices);
        setFilteredServices(formattedServices);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
        setFilteredServices([]);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <AboutConfig />
      <div className="flex flex-col items-center my-8 max-md:mb-8">
        <h1 className="text-3xl max-md:text-2xl w-[calc(100% - 1rem)]">
          پلن‌های پیشنهادی ما برای شما
        </h1>
        <ScrollButtonsWithCircle
          products={services}
          onFilterChange={(filtered) => setFilteredServices(filtered)}
        />
      </div>
      <CardContent props={filteredServices} />
    </div>
  );
};

export default Config;
