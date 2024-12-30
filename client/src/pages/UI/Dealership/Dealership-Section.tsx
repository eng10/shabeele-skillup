import { Badge } from "../../../components/ui/badge";

export default function DealershipSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[16/12] rounded-3xl overflow-hidden">
          <img
            src="/img/dealership.png"
            alt="Team of agricultural machinery dealership professionals"
            className="object-cover"
          />
        </div>
        <div className="space-y-6 mx-auto ">
          <Badge
            variant="secondary"
            className="bg-green-500 text-black rounded-full hover:bg-green-600 px-4 py-1"
          >
            Dealerships
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#004D40] leading-tight">
            Our Official Dealerships
          </h2>
          <p className="text-[#666666] text-lg leading-relaxed">
            At Shabelle Agro Mechanization, we proudly represent some of the
            world's leading agricultural brands, bringing cutting-edge
            technology and reliable solutions to farmers in Ethiopia. Our
            partnerships enable us to provide high-quality machinery and
            equipment tailored to the unique needs of modern agriculture.
          </p>
        </div>
      </div>
    </section>
  );
}
