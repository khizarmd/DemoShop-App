import "./NewProduct.css";
import ProductForm from "./ProductForm";


function NewProduct(props){

function bHandler(product){
console.log("i m inside new product")
    console.log(product);
    props.onA(product)
}


    return(
        <div className="new-product">
        <ProductForm onB={bHandler}/>
          
        </div>
    )

    
}


export default NewProduct;