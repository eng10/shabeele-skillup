import { Carrot, HandCoins, Crown } from "lucide-react";

export default function CompanyValues() {
  return (
    <div className="container mx-auto px-12 py-12 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-emerald-800 flex items-center justify-center">
                <Carrot className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-emerald-800">
                A place where you can thrive and grow
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Driven by strong people's values with a high performance
                culture, we believe in supporting aspirations and helping
                members make a difference regardless of role and locations. We
                listen, we care, and we take action.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-emerald-800 flex items-center justify-center">
                <HandCoins className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-emerald-800">
                A place where performance is recognized and rewarded
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We promise a fast-paced, high performing, and exciting working
                environment that rewards members' passion for excellence and
                commitment to delivering promises. We provide you with a
                competitive salary, exciting development programs, and benefits
                and rewards to support your aspirations.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-emerald-800 flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-emerald-800">
                Colleagues that go the extra mile for each other
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our family culture is embedded in our everyday culture, from the
                bonding and exceptional teamwork spirit between colleagues, to
                the remarkable customer service we pride ourselves on
                delivering.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[600px] rounded-3xl overflow-hidden">
          <img
            src="/img/about1.png"
            alt="Team of professionals"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
