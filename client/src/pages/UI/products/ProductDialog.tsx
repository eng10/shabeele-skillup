import { Dialog, DialogContent } from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    brand?: string;
    category?: string;
  };
}

export function ProductDialog({
  isOpen,
  onClose,
  product,
}: ProductDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 gap-0">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px]">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {product.title}
              </h2>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="">Brand:</span>
                  <span className="font-semibold">
                    {product.brand || "OCMIS Rollers"}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    Share item:
                  </span>
                  <div className="flex gap-2">
                    <Link
                      to="#"
                      className="text-green-500 hover:text-green-600"
                    >
                      <Facebook className="w-5 h-5" />
                    </Link>
                    <Link
                      to="#"
                      className="text-green-500 hover:text-green-600"
                    >
                      <Twitter className="w-5 h-5" />
                    </Link>
                    <Link
                      to="#"
                      className="text-green-500 hover:text-green-600"
                    >
                      <Instagram className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 text-[#808080]">
                {product.description ||
                  `OCMIS rollers are designed to irrigate any terrain with precision and efficiency. 
                Their versatility ensures seamless adaptability to diverse farming needs, 
                delivering reliable performance across all field conditions. With a focus on 
                flexibility and cost-effectiveness, OCMIS machines are the foundation of efficient 
                and productive irrigation systems. By integrating advanced technology and 
                robust design, they empower farmers to maximize yields while minimizing water 
                usage and operational expenses. Shabelle Agro Mechanization proudly offers 
                OCMIS rollers as part of our commitment to providing innovative, climate-smart 
                irrigation solutions tailored to the unique challenges of modern agriculture.`}
              </p>

              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Visit Site <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* {product.category && ( */}
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">Category:</span>
              <span className="text-muted-foreground text-[#808080] ">
                Tractor model:10
              </span>
            </div>
            {/* )} */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
