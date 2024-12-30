import { Link } from "react-router-dom";

export default function FounderHeader() {
  return (
    <div className="relative w-full rounded-[1rem] overflow-hidden h-[300px] sm:h-[400px] md:h-[500px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/public/img/aboutimg.png')`,
        }}
      ></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        {/* Breadcrumb */}
        <nav className="mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm md:text-base text-gray-200/80">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                ABOUT
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">›</span>
              <span className="text-white">FOUNDER</span>
            </li>
          </ol>
        </nav>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Founder
        </h1>
      </div>
    </div>
  );
}
