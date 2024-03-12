import React, { useState } from "react";
// import Todolist from './Todolist';

const App = () =>{
    const [inputList, setInputList]=useState("");
const[Items,setItems] = useState([]);

    const itemEvent=(event) => {
    setInputList(event.target.value);
};

const listOfItems = () =>{
   
    if(inputList===""){
     alert('input field is empty');
    }       
else{

    setItems((oldItems) =>{
        return [...oldItems, inputList];
        
    });
    setInputList("");
    
}
};
function DeleteItems(i){
const updatedListdata =Items.filter((elem,id)=>{
    return i!==id;
})
setItems(updatedListdata);
}
return (
<>
<div className="main_div">
<div className="center_div">
<br/>

<h1>GROCERY LIST APP</h1>

<br/>

<input type="text" placeholder="Add Items" value={inputList} onChange={itemEvent}/>

<button className="btn1" onClick={listOfItems}> + </button>
<div className="container">

<ol>
    {/* <li>{inputList}</li> */}

   { Items!=[] && Items.map( (itemval,i) => {
       return(
        <>
             <p key ={i}>

        <li><button className="btn2"  onClick={()=>DeleteItems(i)}>Delete</button>{Items.indexOf(itemval)+1}{") "}{itemval}</li>
             </p>     
        </>
       );
    })}
</ol>
</div>
</div>
</div>

</>

);
};


export default App;