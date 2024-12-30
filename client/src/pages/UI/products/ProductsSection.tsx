import { ProductCard } from "./ProductsCard";

interface ProductsSectionProps {
  title: string;
  products: {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  }[];
}

export function ProductsSection({ title, products }: ProductsSectionProps) {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-green-900 mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}
