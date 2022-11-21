import CreateForm from "./CreateForm";

function CreateProduct(props) {
    function onCreateForm(product){
        props.getForm(product)
    }
    return(
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <CreateForm createForm={onCreateForm}></CreateForm>
            </div>

        </div>
    );
}

export default CreateProduct;