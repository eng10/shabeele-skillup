export default function TimeLine() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <span className="text-emerald-700 text-sm font-medium uppercase tracking-wider">
              Our Founder
            </span>
            <h1 className="mt-2 text-4xl  text-emerald-900 lg:text-5xl">
              Nuradin and his experience
            </h1>
          </div>
          <div className="lg:pt-8">
            <p className="text-gray-600 text-[16px]">
              Nuradin Osman, the visionary founder of Shabelle Agro
              Mechanization, brings over 30 years of unparalleled experience
              across the agribusiness value chain, dedicated to advancing
              agriculture and food security in Africa. His career spans multiple
              continents, including Switzerland, the United Kingdom, the United
              States, Brazil, and the Netherlands, where he has honed his
              expertise in global agricultural development
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative mt-20  ">
          {/* Timeline Line */}
          <div className="absolute top-0 left-0 w-full ml-10   h-0.5 bg-[#F8F7F0]">
            <div
              className="absolute top-0 left-0 w-full h-full bg-[#d9d8d5]"
              style={{ width: "100%" }}
            />
          </div>

          {/* Timeline Items */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 px-10 ">
            {/* 1987 */}
            <div className="relative pt-6">
              <div className="absolute -top-2.5  transform -translate-x-1/2">
                <div className="w-5 h-5 bg-[#5B8C51]   rounded-full" />
              </div>
              <div className="">
                <span className="block text-6xl font-light text-emerald-900/20 mb-4">
                  1987
                </span>
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">
                  Early Agricultural Exposure
                </h3>
                <p className="text-gray-600 text-sm ">
                  Nuradin gained early agricultural experience, developing a
                  deep understanding of farming practices and challenges
                </p>
              </div>
            </div>

            {/* 1995 */}
            <div className="relative pt-6">
              <div className="absolute -top-2.5 left-1/5 transform -translate-x-1/2">
                <div className="w-5 h-5 bg-[#5B8C51]  rounded-full" />
              </div>
              <div className="">
                <span className="block text-6xl font-light text-emerald-900/20 mb-4">
                  1995
                </span>
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">
                  Focus on Self-Sustaining Agriculture
                </h3>
                <p className="text-gray-600 text-sm">
                  Nuradin pioneered initiatives aimed at self-sustaining
                  agriculture, demonstrating his commitment to empowering
                  farmers
                </p>
              </div>
            </div>

            {/* 2024 */}
            <div className="relative pt-6">
              <div className="absolute -top-2.5 left-1/5 transform -translate-x-1/2">
                <div className="w-5 h-5 bg-[#5B8C51]  rounded-full" />
              </div>
              <div>
                <span className="block text-6xl font-light text-emerald-900/20 mb-4">
                  2024
                </span>
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">
                  Empowering Farmers through Shabelle
                </h3>
                <p className="text-gray-600 text-sm">
                  Nuradin founded Shabelle Agro Mechanization, a company
                  dedicated to advancing agriculture and food security in Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
