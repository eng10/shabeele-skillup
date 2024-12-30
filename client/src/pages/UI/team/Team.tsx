import { Header } from "../../../components/utils/Header";
import { ContactForm } from "./Contact";
import { TeamMembers } from "./Team-members";
import TeamHeader from "./TeamHeader";

const Team = () => {
  return (
    <div>
      <div className="px-4 py-4">
        <Header />
        <TeamHeader />
      </div>
      <TeamMembers />
      <ContactForm />
    </div>
  );
};

export default Team;
