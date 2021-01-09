import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product } from './types';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h1 className="orders-container">
                <StepsHeader />
                <ProductsList products={products} />
                <OrderLocation />
            </h1>
        </div>
    )
}
export default Orders;
