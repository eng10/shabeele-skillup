import { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { ProductDialog } from "./ProductDialog";
interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function ProductCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: ProductCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <Card
        className="overflow-hidden h-full flex flex-col"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="aspect-[4/3] relative w-full">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover p-2 sm:p-4 rounded-[30px] sm:rounded-[50px] hover:scale-105 duration-300 transition cursor-pointer"
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
        <CardContent className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">
            {title}
          </h3>
          <hr className="mb-2" />
          <p className="text-gray-600 text-xs sm:text-sm flex-grow">
            {description}
          </p>
        </CardContent>
      </Card>

      <ProductDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        product={{
          title,
          description,
          imageSrc,
          imageAlt,
        }}
      />
    </>
  );
}
