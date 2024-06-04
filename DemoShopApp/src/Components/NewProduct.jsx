import './NewProduct.css'
import ProductForm from './ProductForm';

const NewProduct = (props) => {
    function saveProduct(product){
        console.log('I am inside New product');
        console.log(product);

        props.productData(product);
    }


    return (
        <div className='new-product'>
            <ProductForm onSaveProduct={saveProduct} />
        </div>
    );
}

export default NewProduct;