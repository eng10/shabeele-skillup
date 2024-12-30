import { useEffect, useRef } from "react";

export default function SlideFont() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      //   const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;
      const duration = contentWidth / 50; // Adjust speed by changing divisor

      containerRef.current.style.setProperty(
        "--content-width",
        `${contentWidth}px`
      );
      containerRef.current.style.setProperty("--duration", `${duration}s`);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white" ref={containerRef}>
      <div
        ref={contentRef}
        className={`inline-flex whitespace-nowrap animate-scroll singnika`}
        style={{
          animation: "scroll var(--duration) linear infinite",
        }}
      >
        <div className="flex items-center text-[64px] tracking-[0.02em]">
          <span className="text-outline-thick">Machines</span>
          <span className="mx-6 text-[#00FF0A]">*</span>
          <span className="text-outline-thick">Agriculture</span>
          <span className="mx-6 text-[#00FF0A]">*</span>
          <span className="text-outline-thick">Farming</span>
          <span className="mx-6 text-[#00FF0A]">*</span>
          <span className="text-outline-thick">Tractor</span>
          <span className="mx-6 text-[#00FF0A]">*</span>
          <span className="text-outline-thick">Equipment</span>
          <span className="mx-6 text-[#00FF0A]">*</span>
        </div>
        {/* Duplicate content for seamless loop */}
        <div className="flex items-center text-[64px] tracking-[0.02em]">
          <span className="text-outline-thick">Machines</span>
          <span className="mx-6 text-[#00FF0A]">*</span>
          <span className="text-outline-thick">Agriculture</span>
          <span className="mx-6 text-[#00FF0A]">*</span>
          <span className="text-outline-thick">Farming</span>
          <span className="mx-6 text-[#00FF0A]">*</span>
          <span className="text-outline-thick">Tractor</span>
          <span className="mx-6 text-[#00FF0A]">*</span>
          <span className="text-outline-thick">Equipment</span>
          <span className="mx-6 text-[#00FF0A]">*</span>
        </div>
      </div>
    </div>
  );
}
