const brands = [
  {
    logo: "/img/dealership1.png",
    title: "Case IH (Sub-Dealer)",
    description:
      "As an authorized sub-dealer under Wereta, the official dealer for Ethiopia, Shabelle Agro Mechanization is the exclusive distributor of Case IH products in the Somali Region of Ethiopia. Case IH is renowned for its innovative tractors, combines, and agricultural machinery, designed to deliver superior performance and efficiency.",
    href: "#case-ih",
  },
  {
    logo: "/img/dealership2.png",

    title: "OCMIS Irrigation Systems:",
    description:
      "We are the official dealer of OCMIS irrigation systems for Ethiopia. OCMIS is a global leader in advanced irrigation solutions, offering state-of-the-art rollers and pivot systems to enhance water management and improve crop yields.",
    href: "#ocmis",
  },
  {
    logo: "/img/dealership3.png",

    title: "Jan Implementos",
    description:
      "As the official dealer of Jan Implementos in Ethiopia, we bring the best no-till farming equipment to support sustainable agriculture. Jan Implementos specializes in robust and efficient seeding and planting technologies that preserve soil health and boost productivity",
    href: "#jan",
  },
  {
    logo: "/img/dealership3.png",

    title: "Radium",
    description:
      "As the official dealer of Jan Implementos in Ethiopia, we bring the best no-till farming equipment to support sustainable agriculture. Jan Implementos specializes in robust and efficient seeding and planting technologies that preserve soil health and boost productivity",
    href: "#radium",
  },
];

function BrandCard({
  logo,
  title,
  description,
  href,
}: {
  logo: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className=" rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02] overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="relative h-16 sm:h-20 md:h-24 mb-6">
          <img
            src={logo}
            alt={`${title} logo`}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6 line-clamp-4">
          {description}
        </p>
        <a
          href={href}
          className="inline-block bg-[#00E640] hover:bg-[#00C836] text-white font-medium px-6 py-2.5 rounded-full
          transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
}

export default function DealershipCard() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {brands.map((brand) => (
            <BrandCard
              key={brand.title}
              logo={brand.logo}
              title={brand.title}
              description={brand.description}
              href={brand.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
