import { Header } from "../../../components/utils/Header";
import FaqHeader from "./FaqHeader";
import FAQSection from "./FaqSection";

const Faq = () => {
  return (
    <div>
      <div className="py-4 px-4">
        <Header />
        <FaqHeader />
      </div>
      <FAQSection />
    </div>
  );
};

export default Faq;
