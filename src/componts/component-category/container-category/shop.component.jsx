import { useContext } from 'react';
import { ProductsContext } from '../../../context/products.context';
import  ProductCar from '../../product-car/productCar.component';
import './shop.scss';
const Shop=()=>{
    const {products}=useContext(ProductsContext);
    return(
        <div className='products-containars'>
            {
                products.map((product)=>(
                    <ProductCar key={product.id} product={product}></ProductCar>
                )
            )}
        </div>
    );
}
export default Shop;