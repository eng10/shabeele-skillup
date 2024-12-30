import { Button } from "../../../components/ui/button";

export default function Sales() {
  return (
    <div className="min-h-screen bg-emerald-900 ">
      <div className="container mx-auto px-20  py-8 md:py-12">
        {/* Header Section */}
        <div className="mb-8">
          <Button
            variant="outline"
            className="bg-white rounded-full text-emerald-900 hover:bg-emerald-50"
          >
            Get To Know Us
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Sales of Spare Parts and Accessories
            </h1>
            <p className="text-emerald-100 text-lg">
              Supplying genuine parts and accessories to ensure equipment
              performance and durability.
            </p>
            <div className="relative aspect-[4/3] w-full ">
              <img
                src="/img/about3.png"
                alt="Farmers reviewing crops in field at sunset"
                className="object-cover rounded-2xl overflow-hidden"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Vision Section */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 flex items-center gap-4">
                <span className="text-6xl font-bold text-green-500">01</span>
                <div>
                  <h2 className="text-2xl font-bold text-emerald-900">
                    Being True To
                  </h2>
                  <h3 className="text-xl font-semibold text-emerald-900">
                    Our Vision.
                  </h3>
                </div>
              </div>
              <p className="text-emerald-100 px-6">
                To revolutionize agriculture by becoming a Somali region leader
                in sustainable, climate-smart farming solutions, empowering
                farmers with innovative technologies that ensure food security,
                enhance productivity, and nurture a healthier planet for future
                generations.
              </p>
            </div>

            {/* Mission Section */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 flex items-center gap-4">
                <span className="text-6xl font-bold text-green-500">02</span>
                <div>
                  <h2 className="text-2xl font-bold text-emerald-900">
                    Our Mission
                  </h2>
                </div>
              </div>
              <p className="text-emerald-100 px-6">
                Our mission is to drive the transformation of agriculture by
                introducing cutting-edge technologies and solutions that meet
                the evolving needs of our time. We are committed to delivering
                comprehensive agricultural solutions that extend beyond
                machinery, encompassing the entire value chain—from production
                and processing to the consumption of agricultural products
              </p>
            </div>

            {/* Values Section */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 flex items-center gap-4">
                <span className="text-6xl font-bold text-green-500">03</span>
                <div>
                  <h2 className="text-2xl font-bold text-emerald-900">
                    Our Values
                  </h2>
                </div>
              </div>
              <p className="text-emerald-100 px-6">
                People are at the core of our success. • Serving customers from
                the heart. • The highest standard of integrity, fairness, and
                professionalism. • Competitive edge through innovation and
                creativity
              </p>
              {/* Add values content here if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
