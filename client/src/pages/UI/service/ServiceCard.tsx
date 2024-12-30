import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

const services = [
  {
    title: "Farm Management",
    description:
      "Professional farm management services to help you optimize operations, maximize yields, and achieve sustainable growth.",
    image: "/img/service1.png",
  },
  {
    title: "Climate-Smart Planting And Seeding Solutions",
    description:
      "Innovative planting and seeding technologies tailored to improve efficiency, conserve resources, and adapt to changing climate conditions.",
    image: "/img/service2.png",
  },
  {
    title: "Parts And Services",
    description:
      "Reliable supply of high-quality parts and professional maintenance services to ensure your machinery performs at its best.",
    image: "/img/service3.png",
  },
  {
    title: "Farm Produce Supply",
    description:
      "Farm Produce Supply: Cultivation and distribution of premium farm produce, including onions, tomatoes, wheat, and maize, grown using sustainable practices.",
    image: "/img/service4.png",
  },
  {
    title: "Tractor And Combine Rentals",
    description:
      "Flexible rental options for tractors and combines to meet the equipment needs of farms of all sizes, without the burden of ownership.",
    image: "/img/service5.png",
  },
  {
    title: "Farm Management Software",
    description:
      "Advanced digital solutions to streamline farm operations, improve decision-making, and provide real-time insights into productivity and resource management.",
    image: "/img/service6.png",
  },
  {
    title: "Farm Labor Force:",
    description:
      "Access to skilled and reliable farm labor to support your agricultural activities and ensure timely and effective operations.",
    image: "/img/service7.png",
  },
];

export default function ServicesCard() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-lg">
            <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full p-2 sm:p-3 md:p-4 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="space-y-2 p-4 sm:p-5">
              <CardTitle className="text-lg sm:text-xl font-semibold text-[#1B4332] line-clamp-2">
                {service.title}
              </CardTitle>
              <hr className="border-gray-200" />
            </CardHeader>
            <CardContent className="p-4 sm:p-5">
              <p className="text-[#666666] text-sm sm:text-base line-clamp-4">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
