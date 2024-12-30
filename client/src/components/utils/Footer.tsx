import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#03453B] text-white py-[5rem] px-12">
      <div className="container flex flex-col items-center justify-center px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12  gap-8 mb-8">
          {/* Logo and Description Section */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <img src="/public/img/logo.svg" alt="" />
            </div>

            <p className="text-gray-300 mb-6">
              Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan
              risus. In vitae sapien viverra est Duo el ullum inani sensent.
            </p>
            <div className="flex gap-4">
              <div className="w-10  flex flex-col items-center justify-center h-10 rounded-full bg-white">
                <Link
                  to="#"
                  className="hover:text-green-500 transition-colors items-center"
                >
                  <Facebook className="w-5 h-5 text-[#5B8C51]" />
                </Link>
              </div>
              <div className="w-10  flex flex-col items-center justify-center h-10 rounded-full bg-white">
                <Link
                  to="#"
                  className="hover:text-green-500 transition-colors items-center"
                >
                  <Twitter className="w-5 h-5 text-[#5B8C51]" />
                </Link>
              </div>
              <div className="w-10  flex flex-col items-center justify-center h-10 rounded-full bg-white">
                <Link
                  to="#"
                  className="hover:text-green-500 transition-colors items-center"
                >
                  <Linkedin className="w-5 h-5 text-[#5B8C51]" />
                </Link>
              </div>
              <div className="w-10  flex flex-col items-center justify-center h-10 rounded-full bg-white">
                <Link
                  to="#"
                  className="hover:text-green-500 transition-colors items-center"
                >
                  <Instagram className="w-5 h-5 text-[#5B8C51]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="md:col-span-2  md:ml-auto">
            <h3 className="text-lg font-semibold mb-4">Useful Link</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Time Section */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Working Time</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Mon - Fri: 9.00am - 5.00pm</li>
              <li className="text-gray-300">Saturday: 10.00am - 6.00pm</li>
              <li className="text-gray-300">Sunday Closed</li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Our Address</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">10 street</li>
              <li className="text-gray-300">jijiga,ethiopia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-4 mb-4 md:mb-0">
              <Link
                to="#"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="text-gray-300">
              Copyright © 2024 shabelle, All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
