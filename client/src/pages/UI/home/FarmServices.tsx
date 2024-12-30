export default function FarmServices() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12 md:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-emerald-800 mb-2">
          Grow Naturally
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 max-w-2xl mx-auto">
          The Perfect Fit for
          <br />
          Your Farm
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-items-center">
        {/* Left Services */}
        <div className="space-y-12">
          <ServiceCard
            icon={"/public/icon/icon0.png"}
            title="Cultivation"
            items={["Precision Planting", "Seed Drilling", "Fertilization"]}
          />
          <ServiceCard
            icon={"/public/icon/icon1.png"}
            title="Production"
            subtitle="Agriculture Machinery and Equipment:"
            items={["For Sale", "For Rent"]}
          />
        </div>

        {/* Center Image */}
        <div className="relative">
          <img
            src="/public/img/img5.png"
            alt="Farm Operations Diagram"
            className="w-full h-auto max-w-md lg:max-w-full"
          />
        </div>

        {/* Right Services */}
        <div className="space-y-12">
          <ServiceCard
            icon={"/public/icon/icon2.png"}
            title="Financing"
            items={["Contracting", "Leasing", "Other financing services"]}
          />
          <ServiceCard
            icon={"/public/icon/icon3.png"}
            title="Investment and Advisory"
            items={["Business development", "Market entry", "Farm management"]}
          />
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  items: string[];
}

function ServiceCard({ icon, title, subtitle, items }: ServiceCardProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2D645C] flex items-center justify-center text-white">
        {/* @ts-ignore */}
        <img src={icon} className="h-8" alt="" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-emerald-900 mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600 mb-2">{subtitle}</p>}
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index} className="text-sm text-gray-600">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
