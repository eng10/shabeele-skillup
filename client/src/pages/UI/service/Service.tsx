import { Header } from "../../../components/utils/Header";
import ServicesCard from "./ServiceCard";
import ServiceHeader from "./ServiceHeader";

const Service = () => {
  return (
    <div>
      <div className="py-4 px-4 ">
        <Header />
        <ServiceHeader />
        <ServicesCard />
      </div>
    </div>
  );
};

export default Service;
