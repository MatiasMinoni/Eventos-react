import React from "react";
import { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';


function carrito(){
    // reemplazar texto
    document.getElementById("addCart").innerHTML="Comprar";
    }
    

const MiComponente =({initial, stock, setStock, cantidad}) => {
[stock, setStock] = useState(initial);

function onAdd(){
        
setStock(stock+1);
onAdd=document.getElementById("onAdd")
onRemove=document.getElementById("onRemove")
const add_Cart=document.getElementById("addCart");

onAdd.disabled=false;
onRemove.disabled=false;
add_Cart.disabled=false;

    while
    (stock>=cantidad-1){
        setStock(cantidad);
      onAdd.disabled=true;
        onRemove.disabled=false;
        
        break;}
      
}
function onRemove(){
    onAdd=document.getElementById("onAdd")
    onRemove=document.getElementById("onRemove")
    const add_Cart=document.getElementById("addCart");
setStock(stock-1);


    onAdd.disabled=false;
    while (stock<=1){   
        setStock(0);
        onAdd.disabled=false;
        onRemove.disabled=true;
        add_Cart.disabled=true;
       break;
    }
    if(stock<=1){
       
    }
}

return (
<>

<div className="valign-wrapper center-align contador_carrito">

<p>Agregar al carrito</p>

<button  className="waves-effect waves-light btn" id="onAdd"  onClick={onAdd}> + </button>

<p>    {stock}    </p>

<button className="waves-effect waves-light btn" id="onRemove" onClick={onRemove}> - </button>

<button className="waves-effect waves-light btn" onClick={carrito} id="addCart" >  Agregar al carrito</button>

</div>
</> 
)
}


export default MiComponente;