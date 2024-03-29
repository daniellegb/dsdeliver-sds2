import { useEffect, useState } from "react";
import { fetchProducts, saveOrder } from "../api";
import Footer from "../Footer";
import OrderLocation from "./OrderLocation";
import OrderSumary from "./OrderSumary";
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import "./styles.css";
import { OrderLocationData, Product } from "./types";
import { checkIsSelected } from "./helpers";
import { toast } from "react-toastify";
import ImageLoader from "../Loaders/ImageLoader";

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch(() => {
        toast.warning("Erro ao listar produtos");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds,
    };

    saveOrder(payload)
      .then((response) => {
        toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
        setSelectedProducts([]);
      })
      .catch(() => {
        toast.warning("Erro ao enviar pedido");
      });
  };

  return (
    <>
      <div>
        <h1 className="orders-container">
          <StepsHeader />
          {isLoading ? (
            <div className="orders-list-container">
              <ImageLoader />
            </div>
          ) : (
            <ProductsList
              products={products}
              onSelectProduct={handleSelectProduct}
              selectedProducts={selectedProducts}
            />
          )}
          <OrderLocation
            onChangeLocation={(location) => setOrderLocation(location)}
          />
          <OrderSumary
            amount={selectedProducts.length}
            totalPrice={totalPrice}
            onSubmit={handleSubmit}
          />
        </h1>
      </div>
      <Footer />
    </>
  );
}
export default Orders;
