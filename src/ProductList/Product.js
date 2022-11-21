
function Product(props) {
    productCount = 0;
    function formatCount(){
        productCount > 0 ? productCount : 0;
    }
    return(
        <div>
            <li class="list-group-item">
                <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                    <div class="media-body order-2 order-lg-1">
                    <h5 class="mt-0 font-weight-bold mb-2">{props.name}</h5>
                    <p class="font-italic text-muted mb-0 small">{props.description}</p>
                    <div class="d-flex align-items-center justify-content-between mt-1">
                        <h6 class="font-weight-bold my-2">$ {props.price}</h6>
                    </div>
                    </div><img src={require(""+props.imageURL)} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2" />
                </div>
            </li>
        </div>
    );
}

export default Product;