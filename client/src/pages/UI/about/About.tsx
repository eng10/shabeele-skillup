import { Header } from "../../../components/utils/Header";
import CTASection from "../home/CTASection";
import AboutUsHeader from "./AboutUsHeader";
import AgricultureStats from "./AgricultureStatus";
import CompanyValues from "./CompanyValues";
import Sales from "./Sales";
import ServicesSection from "./ServiceSection";
import SlideFont from "./SlideFont";
import TimeLine from "./TimeLine";
import WorkWithUs from "./WorkWithUs";

const About = () => {
  return (
    <div className="  ">
      <div className="px-4 py-4">
        <Header />
        <AboutUsHeader />
      </div>
      <AgricultureStats />
      <SlideFont />
      <ServicesSection />
      <Sales />
      <TimeLine />
      <WorkWithUs />
      <CompanyValues />
      <div className="py-20">
        <CTASection />
      </div>
    </div>
  );
};

export default About;
