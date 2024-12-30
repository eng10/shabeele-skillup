const features = [
  {
    title: "Precision Farming Technology",
    description:
      "Leading distributor of conservation agriculture machinery and smart farming since",
    icon: "/public/icon/vector3.png",
  },
  {
    title: "Innovative Agricultural Machinery",
    description:
      "Innovative tilling, planter, harvesters, mowing tractors from CASE IH tailored to farmers' needs",
    icon: "/public/icon/vector.png",
  },
  {
    title: "Sustainable Agriculture Solutions",
    description:
      "Over 50 agriculture specialists and technical experts delivering tailored farming solutions to local and international partners",
    icon: "/public/icon/vector1.png",
  },
  {
    title: "Expert Agricultural Advisory",
    description:
      "Supported a community of | number | local farmers and new generation of next-gen innovators",
    icon: "/public/icon/vector2.png",
  },
];

export function Features() {
  return (
    <section className="py-5">
      <div className="max-full mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-[#FFFEDF] rounded-lg p-6 overflow-hidden"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-[#004D3C] rounded-full">
                    <img
                      src={feature.icon}
                      className="h-6 w-6 text-white"
                      alt={feature.title}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#004D3C] mb-2">
                    {feature.title}
                  </h3>
                  <hr className="realtive top-10 py-1" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
