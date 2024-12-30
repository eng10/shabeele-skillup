import { CircularProgress } from "../../../components/circular-progress";

export default function FounderAbout() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Our Founder Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-teal-800 mb-6">Our Founder</h2>
        <div className="space-y-6 text-gray-700">
          <p>
            Nuradin Osman, the visionary founder of Shabelle Agro Mechanization,
            brings over 30 years of unparalleled experience across the
            agribusiness value chain, dedicated to advancing agriculture and
            food security in Africa. His career spans multiple continents,
            including Switzerland, the United Kingdom, the United States,
            Brazil, and the Netherlands, where he has honed his expertise in
            global agricultural development.
          </p>
          <p>
            As a seasoned leader, Nuradin has been instrumental in pioneering
            initiatives aimed at self-sustaining agriculture, with a deep
            commitment to empowering farmers and enhancing food security across
            Africa. Having worked for one of the world's top three agricultural
            equipment manufacturers, he was responsible for driving growth and
            development across the African continent, gaining firsthand insights
            into the diverse challenges and opportunities in the region.
          </p>
          <p>
            Nuradin's extensive travel to over 120 countries has provided him
            with a unique, global perspective on agriculture. This experience
            fuels his passion for implementing innovative, climate-smart
            technologies and creating sustainable solutions tailored to the
            needs of African farmers. Through Shabelle Agro Mechanization,
            Nuradin Osman continues to shape the future of agriculture, ensuring
            that Africa's potential as a global agricultural powerhouse is fully
            realized.
          </p>
        </div>
      </section>

      {/* Skills and Awards Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Professional Skills Section */}
        <section>
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            Professional Skills
          </h2>
          <p className="mb-8 text-gray-700">
            As an aspiring farmer, it's important to work on your skill set for
            this particular profession. Not only can improving your farmer
            skills help you in future interviews, but it can also help you on
            the job. In this article, we explain what farmer skills are, provide
            examples, them in the job application and interview process.
          </p>
          <div className="flex flex-wrap justify-between gap-8">
            <CircularProgress percentage={75} label="Analytical Skills" />
            <CircularProgress percentage={80} label="Farming Skills" />
            <CircularProgress percentage={90} label="Problem Solving" />
          </div>
        </section>

        {/* Awards & Honors Section */}
        <section>
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            Awards & Honors
          </h2>
          <p className="mb-8 text-gray-700">
            Awarded for driving advancements in sustainable and high-yielding
            agricultural practices.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-[#5B8C51] pl-4">
              <h3 className="font-medium text-teal-800">
                2013: Desmond Tutu and Oxford Univercity award
              </h3>
            </div>
            <div className="border-l-4 border-[#5B8C51] pl-4">
              <h3 className="font-medium text-teal-800">
                2014 Top 100 Africa Economic Leader for Tomorrow #80
              </h3>
            </div>
            <div className="border-l-4 border-[#5B8C51] pl-4">
              <h3 className="font-medium text-teal-800">
                2015 Top100 Africa Economic Leader for Tomorrow #57
              </h3>
            </div>
            <div className="border-l-4 border-[#5B8C51] pl-4">
              <h3 className="font-medium text-teal-800">
                2017 World HRD congres - winner World Diversity & Inclusion
                leader
              </h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
