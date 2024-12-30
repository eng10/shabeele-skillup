"use client";

import { useEffect, useState } from "react";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

export default function AgricultureStats() {
  const farmerCount = useCountUp(435);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/img/about2.png"
              alt="Farmers working in a field with agricultural equipment"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="w-52 absolute h-40 -mt-40 -bottom-7 -right-4 flex items-center justify-center rounded-[20px]  bg-white ">
            <div className="relative w-40 h-32  mx-auto   bg-[#004D40] text-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold ">
                {farmerCount}
                <span className="text-green-400">+</span>
              </div>
              <div className="text-sm mt-1">Farmers Supported</div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="text-sm text-green-600 font-medium">Who We Are</div>
            <h1 className="text-3xl font-bold text-[#004D40] mt-2">
              Driving agricultural transformation through technology and
              expertise
            </h1>
            <p className="mt-4 text-gray-600">
              We are a provider of integrated agriculture solutions with smart
              farming machinery and equipment technology, advanced farming
              management, and industry-led agriculture intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="h-12 w-12   flex items-center justify-center">
                <img
                  src="/public/icon/vector4.png"
                  className="h-10 w-10 text-green-600"
                />
              </div>
              <h3 className="font-semibold text-[#004D40]">
                Eco Farms Worldwide
              </h3>
              <p className="text-sm text-gray-600">
                Smart Farming Solutions Across Africa
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12  flex items-center justify-center">
                <img
                  src="/public/icon/vector5.png"
                  className="h-10 w-10 text-green-600"
                />
              </div>
              <h3 className="font-semibold text-[#004D40]">
                Special Equipment
              </h3>
              <p className="text-sm text-gray-600">
                Advanced agricultural machinery and equipment tailored for
                modern farming needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
