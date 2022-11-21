import {useState} from 'react'

function CreateForm(props) {

    let [productName, updateName] = useState('');
    let [productPrice, updatePrice] = useState('');
    let [productDescription, updateDescription] = useState('');
    let [productAvai, updateAvailable] = useState(false);
    let [productImage, updateImage] = useState('');

    function nameHandler(event){
        updateName(event.target.value);
    }
    function priceHandler(event){
        updatePrice(event.target.value);
    }
    function descriptionHandler(event){
        updateDescription(event.target.value);
    }
    function availableHandler(event){
        updateAvailable(event.target.value)
    }
    function imageHandler(event){
        updateImage(event.target.value)
    }

    function submitHandler(event){
        //prevent reload page
        event.preventDefault();
        let product={
            pID:1,
            pName:productName,
            desc: productDescription,
            isAvailable: Boolean(productAvai),
            image:productImage,
            price:Number(productPrice)
        }
        updateName('');
        updateDescription('');
        updatePrice('');
        updateAvailable(false);
        updateImage('');

        props.createForm(product);
    }

    return(
        <form className="row g-3">
            <div className="col-md-6">
                <label for="name">Product Name</label>
                <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Product Name" 
                        value={productName}
                        onChange={nameHandler}/>
            </div>
            <div className="col-md-6">
                <label for="price">Product Price</label>
                <input type="number" 
                        min="0.01" step="0.01" 
                        className="form-control" 
                        id="price" 
                        placeholder="Product Price" 
                        value={productPrice}
                        onChange={priceHandler}/>
            </div>

            <div className="form-group">
                <label for="description">Product Description</label>
                <input type="text" 
                        className="form-control" 
                        id="description" 
                        placeholder="Product Description" 
                        value={productDescription}
                        onChange={descriptionHandler}/>
            </div>

            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="isAvailable" checked={productAvai} onChange={availableHandler}/>
                <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label for="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image" value={productImage} onChange={imageHandler}/>
            </div>
            

            <button type="submit" className="btn btn-primary" onSubmit={submitHandler}>Add Product</button>
        </form>
    );
}

export default CreateForm;