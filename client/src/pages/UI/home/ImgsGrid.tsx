export default function ImgGrid() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Maintenance Worker */}
        <div className="relative aspect-[4/5]  overflow-hidden mt-10 ">
          <img
            src="/public/img/img6.png"
            alt="Agricultural maintenance worker in gray workwear maintaining equipment"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Farmer with Tractors */}
        <div className="relative aspect-[4/5]  overflow-hidden">
          <img
            src="/public/img/img7.png"
            alt="Farmer standing in front of tractors working in crop fields"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="rounded-2xl object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Sunset Harvest */}
        <div className="relative aspect-[4/5]  overflow-hidden">
          <img
            src="/public/img/img8.png"
            alt="Workers harvesting and collecting crops at sunset"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="rounded-2xl object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Solar Panels and Crops */}
        <div className="relative aspect-[4/5]  overflow-hidden">
          <img
            src="/public/img/img9.png"
            alt="Solar panels installed alongside agricultural fields"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className=" rounded-2xl mt-10 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
