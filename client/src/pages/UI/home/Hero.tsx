import { Button } from "../../../components/ui/button";

export function Hero() {
  return (
    <div className="relative rounded-[1rem] overflow-hidden  ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover   bg-center"
        style={{
          backgroundImage: "url('/img/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative  px-4 pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-6xl font-bold text-white max-w-5xl mx-auto leading-tight">
          Transforming Somali Region agriculture
          {/* <br className="hidden sm:inline" /> */}
          <span className="block sm:inline">
            {" "}
            through climate-smart solutions for sustainable harvests soil
          </span>
        </h1>
        <Button
          className="mt-8 bg-[#FFFEDF] hover:bg-[#01C621] hover:text-white hover:border-transparent transition  duration-300  px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full"
          variant="outline"
        >
          Contact Us
          <span className="ml-2">→</span>
        </Button>
      </div>
    </div>
  );
}
