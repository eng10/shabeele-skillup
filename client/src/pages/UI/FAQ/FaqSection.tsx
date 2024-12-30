"use client";

import { useState } from "react";
import { ChevronUpIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const generalQuestions: FAQItem[] = [
  {
    id: 1,
    question:
      "What products and services does Shabelle Agro Mechanization offer?",
    answer:
      "We provide a wide range of products and services, including tractors, combines, irrigation systems, no-till farming equipment, and agricultural implements. Our services include farm management, tractor and combine rentals, farm management software, parts and services, and access to a skilled farm labor force.",
  },
  {
    id: 3,
    question: "Do you provide after-sales services?",
    answer:
      "Yes, we offer comprehensive after-sales support including maintenance, repairs, and technical assistance.",
  },
  {
    id: 5,
    question: "Do you supply irrigation systems?",
    answer:
      "Yes, we provide modern irrigation systems suitable for various farm sizes and crop types.",
  },
  {
    id: 7,
    question: "Do you provide training for equipment operators?",
    answer:
      "Yes, we offer extensive training programs for all equipment operators.",
  },
  {
    id: 8,
    question: "How do I purchase equipment or request a service?",
    answer:
      "You can contact our sales team through our website, phone, or visit our showroom.",
  },
  {
    id: 11,
    question: "Can I get a demonstration of your products?",
    answer:
      "Yes, we offer product demonstrations at our facility or at your farm location.",
  },
];

const otherQuestions: FAQItem[] = [
  {
    id: 2,
    question: "Which regions do you serve in Ethiopia?",
    answer:
      "We are the exclusive dealer for Case IH in the Somali Region of Ethiopia. We also serve customers across Ethiopia as official dealers for OCMIS Irrigation, Jan Implementos, and Radium Engineering.",
  },
  {
    id: 4,
    question:
      "Can I rent tractors and combines from Shabelle Agro Mechanization?",
    answer: "Yes, we offer flexible rental options for our equipment.",
  },
  {
    id: 6,
    question: "What crops can your equipment support?",
    answer:
      "Our equipment supports a wide range of crops including cereals, pulses, and commercial crops.",
  },
  {
    id: 9,
    question: "What is no-till farming, and how can your equipment help?",
    answer:
      "No-till farming is a conservation practice that minimizes soil disturbance. We provide specialized equipment for this method.",
  },
  {
    id: 10,
    question: "Do you offer financing options for equipment purchases?",
    answer:
      "Yes, we offer various financing solutions to help you acquire our equipment.",
  },
  {
    id: 12,
    question:
      "What makes Shabelle Agro Mechanization different from other dealers?",
    answer:
      "We offer comprehensive solutions, excellent after-sales support, and extensive local experience.",
  },
];

export default function FAQSection() {
  const [openGeneral, setOpenGeneral] = useState<number | null>(1);
  const [openOther, setOpenOther] = useState<number | null>(2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {/* General Questions Column */}
        <div>
          <div className="mb-6">
            <span className="text-[#00B207] text-sm">Most Ask</span>
            <h2 className="text-3xl font-bold mt-2">General Questions</h2>
          </div>
          <div className="space-y-4">
            {generalQuestions.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setOpenGeneral(openGeneral === item.id ? null : item.id)
                  }
                  className={cn(
                    "w-full px-6 py-4 flex justify-between items-center",
                    openGeneral === item.id && "bg-[#00B207] text-white"
                  )}
                >
                  <span className="text-left font-medium">{item.question}</span>
                  <ChevronUpIcon
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      openGeneral !== item.id && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openGeneral === item.id ? "max-h-96" : "max-h-0"
                  )}
                >
                  <div className="p-6 bg-white">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Questions Column */}
        <div>
          <div className="mb-6">
            <span className="text-[#00B207] text-sm">People Know</span>
            <h2 className="text-3xl font-bold mt-2">Other Questions</h2>
          </div>
          <div className="space-y-4">
            {otherQuestions.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setOpenOther(openOther === item.id ? null : item.id)
                  }
                  className={cn(
                    "w-full px-6 py-4 flex justify-between items-center",
                    openOther === item.id && "bg-[#00B207] text-white"
                  )}
                >
                  <span className="text-left font-medium">{item.question}</span>
                  <ChevronUpIcon
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      openOther !== item.id && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openOther === item.id ? "max-h-96" : "max-h-0"
                  )}
                >
                  <div className="p-6 bg-white">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
