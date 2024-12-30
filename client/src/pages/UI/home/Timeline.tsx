export default function Timeline() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <span className="text-emerald-700 text-sm font-medium uppercase tracking-wider">
              Our History
            </span>
            <h1 className="mt-2 text-4xl  text-emerald-900 lg:text-5xl">
              Shabeele Agro was established in 2024
            </h1>
          </div>
          <div className="lg:pt-8">
            <p className="text-gray-600 text-[16px]">
              Nuradi Osman is the founder and CEO of Shabelle Agro, currently
              leading the Africa and Middle East operations of AGCO Corporation,
              a global multi billion revenue agricultural equipment manufacturer
              since 2011
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
                  deep understanding of farming practices
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
                  agriculture, demonstrating his commitment to sustainable
                  farming practices
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
                  Nuradin founded Shabelle Agro Mecha company dedicated to
                  advancing agricultural technology and empowering farmers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
