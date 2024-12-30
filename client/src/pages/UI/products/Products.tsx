import { Header } from "../../../components/utils/Header";
import ProductsHeader from "./ProductsHeader";
import ProductsPage from "./ProductsPage";

const Products = () => {
  return (
    <div>
      <div className="py-4 px-4">
        <Header />
        <ProductsHeader />
      </div>
      <ProductsPage />
    </div>
  );
};

export default Products;
