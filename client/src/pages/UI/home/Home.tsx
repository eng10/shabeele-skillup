import { Header } from "../../../components/utils/Header";
import ClientLogo from "./ClientLogo";
import CTASection from "./CTASection";
import FarmServices from "./FarmServices";
import { Features } from "./Features";
import { Hero } from "./Hero";
import ImgGrid from "./ImgsGrid";
import Service from "./Service";
import AgricultureStats from "./Status";
import Testimonials from "./Testimonials";
import Timeline from "./Timeline";

export const Home = () => {
  return (
    <div>
      <div className=" px-4 py-4">
        <Header />
        <Hero />
        <Features />
        <AgricultureStats />
        <Service />
        <FarmServices />
        <ImgGrid />
        <Testimonials />
        <ClientLogo />
        <Timeline />
        <CTASection />
      </div>
    </div>
  );
};
