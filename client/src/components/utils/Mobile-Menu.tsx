"use client";

import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-4">
          {/* Standard Links */}
          <Link
            to="/"
            className="block px-2 py-1 text-lg hover:text-green-600"
            onClick={() => setOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="block px-2 py-1 text-lg hover:text-green-600"
            onClick={() => setOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            to="/service"
            className="block px-2 py-1 text-lg hover:text-green-600"
            onClick={() => setOpen(false)}
          >
            SERVICES
          </Link>

          {/* Dropdown Menu for Dealership */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-full px-2 py-1 text-lg hover:text-green-600"
            >
              DEALERSHIP
              <ChevronDown
                className={`ml-2 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/dealership"
                  className="block px-2 py-1 text-sm hover:text-green-600"
                  onClick={() => setOpen(false)}
                >
                  DEALERSHIP
                </Link>
                <Link
                  to="/contactus"
                  className="block px-2 py-1 text-sm hover:text-green-600"
                  onClick={() => setOpen(false)}
                >
                  Get In Touch
                </Link>

                <Link
                  to="/team-members"
                  className="block px-2 py-1 text-sm hover:text-green-600"
                  onClick={() => setOpen(false)}
                >
                  TEAM
                </Link>
                <Link
                  to="/founder"
                  className="block px-2 py-1 text-sm hover:text-green-600"
                  onClick={() => setOpen(false)}
                >
                  FOUNDER
                </Link>
                <Link
                  to="/faqs"
                  className="block px-2 py-1 text-sm hover:text-green-600"
                  onClick={() => setOpen(false)}
                >
                  FAQS
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/products"
            className="block px-2 py-1 text-lg hover:text-green-600"
            onClick={() => setOpen(false)}
          >
            PRODUCTS
          </Link>
          <Link
            to="/team-members"
            className="block px-2 py-1 text-lg hover:text-green-600"
            onClick={() => setOpen(false)}
          >
            TEAM
          </Link>

          {/* Contact Info & CTA */}
          <div className="mt-4 space-y-4">
            <div className="flex flex-col gap-2 px-2">
              <p className="font-medium">Call us Now</p>
              <Link to="tel:+251953190533" className="text-green-600">
                +251953190533
              </Link>
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              Get in Touch
              <span className="ml-2">→</span>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
