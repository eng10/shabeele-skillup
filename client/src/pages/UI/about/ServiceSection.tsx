export default function ServicesSection() {
  const services = [
    {
      title: "Farm Management",
      image: "/public/img/cate1.png",
      alt: "Aerial view of tractor in field",
    },
    {
      title: "Climate-Smart Planting and Seeding Solutions",
      image: "/public/img/cate2.png",
      alt: "Person planting in garden",
    },
    {
      title: "Parts and Services",
      image: "/public/img/cate3.png",

      alt: "Agricultural workers in field at sunset",
    },
    {
      title: "Farm Management Software",
      image: "/public/img/cate4.png",
      alt: "Person working with agricultural equipment",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-wider text-gray-600 mb-2">
          Our Services
        </h2>
        <h3 className="text-4xl font-bold text-[#0A4D3C]">
          Best Agriculture Services
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-64 h-64 mb-4">
              <div className="absolute inset-3 items-center flex flex-col justify-center rounded-full border-4 border-[#5B8C51]">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="rounded-full hover:scale-110 duration-300 object-cover"
                />
              </div>
            </div>
            <h4 className="text-center text-lg font-semibold text-[#0A4D3C]">
              {service.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
