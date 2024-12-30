import { Header } from "../../../components/utils/Header";
import { ContactForm } from "../team/Contact";
import ContactHeader from "./ContactHeader";

const Contact = () => {
  return (
    <div>
      <div className="py-4 px-4">
        <Header />
        <ContactHeader />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
