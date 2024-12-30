export default function DealershipShowcase() {
  const dealers = [
    {
      name: "Case IH",
      logo: "/img/dealership5.png",
    },
    {
      name: "OCMIS",
      logo: "/img/dealership6.png",
    },
    {
      name: "Jan",
      logo: "/img/dealership7.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-[#004D40] rounded-3xl p-8 sm:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="space-y-4 mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-cream">
              Our Official Dealerships
            </h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl">
              Partnering with leading brands to deliver high-quality solutions
              for Ethiopian farmers
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold text-cream">
              4 <span className="text-green-400">+</span>
            </div>
            <div className="text-gray-300 text-sm sm:text-base">
              Dealerships
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-600 mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
          {dealers.map((dealer) => (
            <div
              key={dealer.name}
              className="relative w-full h-16 sm:h-20 lg:h-24 transition-transform hover:scale-105"
            >
              <img
                src={dealer.logo}
                alt={`${dealer.name} logo`}
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
