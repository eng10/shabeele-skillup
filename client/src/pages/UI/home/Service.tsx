"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useState } from "react";

// Define the product data
const products = [
  {
    id: 1,
    title: "Hose Reels",
    description: "OCMIS Rollers - Revolutionizing Irrigation for Every Terrain",
    image: "/public/img/img1.png",
    alt: "Orange tractor",
  },
  {
    id: 2,
    title: "Pivot Systems",
    description:
      "Efficient, automated, and easy to manage for sustainable irrigation",
    image: "/public/img/img2.png",
    alt: "Red agricultural implement",
  },
  {
    id: 3,
    title: "Tractor Pumps – Efficient And Reliable Water Delivery",
    description:
      "Powerful tractor pumps for efficient irrigation, handling fresh water and sludge",
    image: "/public/img/img3.png",

    alt: "Tiered garden bed",
  },
  {
    id: 4,
    title: "Smart Irrigation",
    description: "Advanced systems for precision water management",
    image: "/public/img/img4.png",
    alt: "Smart irrigation system",
  },
  {
    id: 5,
    title: "Drip Systems",
    description: "Water-efficient solutions for targeted irrigation",
    image: "/public/img/img4.png",
    alt: "Drip irrigation",
  },
];

export default function Service() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, products.length - itemsPerPage)
        : Math.max(0, prevIndex - itemsPerPage)
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-[#004D40] py-20 p-8 rounded-[20px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-white/80 text-sm mb-2">Our Services</p>
            <h1 className="text-white text-3xl font-semibold">
              Product irrigation
            </h1>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white/20 hover:bg-white/10"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-4 w-4 text-white" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white/20 hover:bg-white/10"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4 text-white" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 flex flex-col transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 mb-4">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
