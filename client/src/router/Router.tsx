import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "../components/utils/Footer";
import { Home } from "../pages/UI/home/Home";
import Service from "../pages/UI/service/Service";
import Dealership from "../pages/UI/Dealership/Dealership";
import About from "../pages/UI/about/About";
import Products from "../pages/UI/products/Products";
import Team from "../pages/UI/team/Team";
import Founder from "../pages/UI/founder/Founder";
import Faq from "../pages/UI/FAQ/Faq";
import Contact from "../pages/UI/contact/Contact";

const Router = () => {
  return (
    <div className="">
      <div className="">
        {" "}
        <Outlet />{" "}
      </div>
      <div>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
};

export default Router;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "dealership",
        element: <Dealership />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "team-members",
        element: <Team />,
      },
      {
        path: "founder",
        element: <Founder />,
      },
      {
        path: "faqs",
        element: <Faq />,
      },
      {
        path: "contactus",
        element: <Contact />,
      },
    ],
  },
]);
