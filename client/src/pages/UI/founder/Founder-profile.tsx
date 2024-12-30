import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function FounderProfile() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row bg-[#004d40]">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2  aspect-[4/3]">
          <img
            src="/img/founder1.png"
            alt="Founder"
            className="object-cover "
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-8 lg:p-12">
          {/* Founder Label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-green-500 font-medium">FOUNDER</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl font-bold text-white mb-6">Nuradin Osman</h1>

          {/* Description */}
          <p className="text-gray-200 mb-8 leading-relaxed">
            Nuradin Osman, the visionary founder of Shabelle Agro Mechanization,
            leads the company with a deep commitment to empowering farmers and
            advancing sustainable agriculture in Africa
          </p>

          {/* Contact Information */}
          <div className="space-y-4 mb-8">
            <div className="flex gap-8">
              <span className="text-green-500 min-w-[100px]">Phone</span>
              <span className="text-white">+(123) 1800-567-8990</span>
            </div>
            <div className="flex gap-8">
              <span className="text-green-500 min-w-[100px]">Email</span>
              <span className="text-white">hello@infopbm.com</span>
            </div>
            <div className="flex gap-8">
              <span className="text-green-500 min-w-[100px]">Experience</span>
              <span className="text-white">30 Years</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full hover:scale-75 hover:border-green-500 transition-all hover:bg-green-500/10 duration-500 border-green-500 bg-green-500/10"
            >
              <Facebook className="w-5 h-5 text-white" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full hover:scale-75 hover:border-green-500 transition-all hover:bg-green-500/10 duration-500 border-green-500 bg-green-500/10"
            >
              <Twitter className="w-5 h-5 text-white" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full hover:scale-75 hover:border-green-500 transition-all hover:bg-green-500/10 duration-500 border-green-500 bg-green-500/10"
            >
              <Instagram className="w-5 h-5 text-white" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full hover:scale-75 hover:border-green-500 transition-all hover:bg-green-500/10 duration-500 border-green-500 bg-green-500/10"
            >
              <Youtube className="w-5 h-5 text-white" />
              <span className="sr-only">YouTube</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
