import { Header } from "../../../components/utils/Header";
import { ContactForm } from "../team/Contact";
import FounderAbout from "./Founder-about";
import FounderProfile from "./Founder-profile";
import FounderHeader from "./FounderHeader";

const Founder = () => {
  return (
    <div>
      <div className="py-4 px-4">
        <Header />
        <FounderHeader />
      </div>
      <FounderProfile />
      <FounderAbout />
      <ContactForm />
    </div>
  );
};

export default Founder;
