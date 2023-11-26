import { useState } from "react";
import "./ProductForm.css";


function ProductForm(props){

// const [fullProductInput, setfullProductInput] = useState({
//     title:'',
//     date:''
// });

const [newtitle, setTitle] = useState('');
const [newdate, setDate] = useState('');

//     function titleChangeHandler(event,prevState){
//         let obj1 =  {...prevState, title:event.target.value}
//         console.log(obj1);
//         return obj1
//         // console.log(event.target.value)    
        
//     }

//     function dateChangeHandler(event,prevState){
//         let obj ={...prevState, date:event.target.value}
// console.log(obj)
// return obj

//     }

function titleChangeHandler(event){
    setTitle(event.target.value)
}
function dateChangeHandler(event){
    setDate(event.target.value)
}

function submitHandler(event){
    event.preventDefault();

    const productData = {
        title : newtitle,
        date : newdate
    }
// console.log(productData)
console.log("i m inside product form")
console.log(productData)
props.onB(productData)

setTitle('');
setDate('');
}
    return(
        <form onSubmit={submitHandler}>
        <div className="new-product_controls">
            <div className="new-product_control">
             <label>Title</label>
             <input type="text" value={newtitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-product_control">
                <label>Date</label>
                <input type="date" min='2023-01-02' max='2023-12-12' value={newdate} onChange={dateChangeHandler}></input>
            </div>
            <div className="new-product-button">
                <button type="submit" >Add Product</button>
           </div>
            </div>
        </form>
    )
}

export default ProductForm;