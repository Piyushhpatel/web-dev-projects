import { useState } from 'react';
import './ProductForm.css';

const ProductForm = (props) => {
    const [newtitle, setTitle] = useState('');
    const [newdate, setDate] = useState('');

    function titleHandler(event){
        setTitle(event.target.value);
    }

    function dateHandler(event){
        setDate(event.target.value);
    }

    function formSubmitHandler(event){
        event.preventDefault();

        const product = {
            title: newtitle,
            date: newdate,
        };

        props.onSaveProduct(product);

        setTitle('');
        setDate('');

    }

    return (
        <form className='new-product_form' onSubmit={formSubmitHandler}>
            <div className='new-product_title'>
                <label htmlFor="">Title</label>
                <input type="text" value={newtitle} onChange={titleHandler}/>
            </div>  
            <div className='new-product_date'>
                <label htmlFor="">Date</label>
                <input type="date" min='2023-01-01' value={newdate} max='2023-12-12' onChange={dateHandler}/>
            </div>
            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    );
};

export default ProductForm;