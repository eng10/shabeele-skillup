import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { ChevronDown, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { MobileMenu } from "./Mobile-Menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let dropdownTimer: any = null; // Timer for delayed dropdown close

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer); // Clear any existing timer
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Delay hiding dropdown by 300ms
  };

  return (
    <nav
      className={`fixed top-0 py-5 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white py-0 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-7 mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/img/logo.svg"
                alt="Shabelle Logo"
                width={100}
                height={100}
                className="h-20 w-auto sm:h-12"
              />
            </Link>
          </div>

          <div className="gap-20 flex">
            {/* Navigation Menu - Desktop */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="gap-8">
                  {[
                    { label: "HOME", link: "/" },
                    { label: "ABOUT US", link: "/about" },
                    { label: "SERVICES", link: "/service" },
                    { label: "PRODUCTS", link: "/products" },
                  ].map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <Link to={item.link}>
                        <NavigationMenuLink
                          className={`relative transition-all duration-300 ${
                            isScrolled ? "text-black" : "text-white"
                          } hover:text-green-700`}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}

                  {/* Dropdown Menu with Animation */}
                  <NavigationMenuItem
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center transition-all duration-300 ${
                        isScrolled ? "text-black" : "text-white"
                      } hover:text-green-700`}
                    >
                      DEALERSHIP
                      <ChevronDown
                        className={`ml-1 transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`absolute mt-2 bg-white shadow-lg rounded-md transform transition-all duration-500 ${
                        isDropdownOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-4 pointer-events-none"
                      }`}
                    >
                      <ul className="p-2">
                        {[
                          { label: "DEALERSHIP", link: "/dealership" },
                          { label: "MISSION", link: "/mission" },
                          { label: "TEAM", link: "/team-members" },
                          { label: "FOUNDER", link: "/founder" },
                          { label: "Get In Touch", link: "/contactus" },
                          { label: "FAQS", link: "/faqs" },
                        ].map((item, index) => (
                          <li key={index}>
                            <Link
                              to={item.link}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Contact Info & CTA - Desktop */}
            <div className="hidden md:flex md:gap-10 items-center space-x-4">
              <div className="flex flex-col items-center text-gray-700">
                <div className="flex">
                  <Phone
                    className={`h-5 w-5 ${
                      isScrolled ? "text-black" : "text-[#01C621]"
                    }  mr-2`}
                  />
                  <span
                    className={`hidden lg:inline ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                  >
                    Call us Now
                  </span>
                </div>
                <Link
                  to="tel:+251953190533"
                  className={`ml-2 ${isScrolled ? "text-black" : "text-white"}`}
                >
                  +251953190533
                </Link>
              </div>
              <Button className="bg-[#01C621] rounded-full hover:bg-[#FFFEDF] hover:text-black duration-300 transition text-white px-6">
                Get in Touch
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
