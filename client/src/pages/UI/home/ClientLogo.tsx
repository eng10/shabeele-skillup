"use client";

export default function ClientLogo() {
  const logos = [
    { src: "/public/img/logo1.png", alt: "Organic Rice Logo" },
    { src: "/public/img/logo2.png", alt: "Farm Logo" },
    { src: "/public/img/logo3.png", alt: "Farm Fresh Logo" },
    { src: "/public/img/logo4.png", alt: "Food Logo" },
    { src: "/public/img/logo5.png", alt: "Eco Product Logo" },
    { src: "/public/img/logo6.png", alt: "Tractor Logo" },
  ];

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="relative flex w-full">
        {/* First set of logos */}
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8">
          {logos.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="flex h-20 w-[120px] items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                className="h-auto max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
        {/* Second set of logos for seamless loop */}
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8">
          {logos.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="flex h-20 w-[120px] items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                className="h-auto max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
