import { ProductsSection } from "./ProductsSection";

const irrigationProducts = [
  {
    title: "Hose Reels",
    description: "OCMIS Rollers – Revolutionizing Irrigation for Every Terrain",
    imageSrc: "/img/img1.png",
    imageAlt: "Red tractor for irrigation",
  },
  {
    title: "Pivot Systems",
    description:
      "Efficient, automated, and easy to manage for sustainable irrigation.",
    imageSrc: "/img/img2.png",
    imageAlt: "Red pivot system equipment",
  },
  {
    title: "Tractor Pumps – Efficient And Reliable Water Delivery",
    description:
      "Powerful tractor pumps for efficient irrigation, handling fresh water and sludge.",
    imageSrc: "/img/img3.png",
    imageAlt: "Tiered garden irrigation system",
  },
];

const tractorProducts = [
  {
    title: "Tractor Multi-Purpose Workhorse",
    description:
      "Maxuum tractors: Powerful, efficient, and customizable for your farming needs",
    imageSrc: "/img/service3.png",
    imageAlt: "Aerial view of green tractor in field",
  },
  {
    title: "Combine – Redefining Productivity",
    description:
      "Case IH Axial-Flow 4000 Series combines: Engineered for high performance and efficiency in modern farming",
    imageSrc: "/img/service1.png",
    imageAlt: "Combine harvester at sunset",
  },
  {
    title: "Soil Fertilization",
    description:
      "Farming and animal husbandry and discuss with farmers and scientists.",
    imageSrc: "/img/service2.png",
    imageAlt: "Soil fertilization equipment",
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-20 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12">
      <ProductsSection
        title="Products irrigation"
        products={irrigationProducts}
      />
      <ProductsSection title="Tractor and combine" products={tractorProducts} />
    </div>
  );
}
