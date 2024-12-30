import { Header } from "../../../components/utils/Header";
import CTASection from "../home/CTASection";
import DealershipCard from "./Dealership-card";
import DealershipSection from "./Dealership-Section";
import DealershipHeader from "./DealershipHeader";
import DealershipShowcase from "./DealershipShowcase";

const Dealership = () => {
  return (
    <div>
      <div className="px-4 py-4">
        <Header />
        <DealershipHeader />
        <DealershipSection />
        <DealershipCard />
        <CTASection />
        <DealershipShowcase />
      </div>
    </div>
  );
};

export default Dealership;
