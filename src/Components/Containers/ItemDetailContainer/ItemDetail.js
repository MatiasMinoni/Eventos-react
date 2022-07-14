import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MiComponente from "../../ItemCount/ItemCount"


const ItemDetail = ({ product }) => {





  return (
    <div key="id" class="row ">
        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img  src={product.image} alt=""></img>
              <span  class="card-title">{product.title}</span>
            </div>
            <div class="card-content">
              <p >Precio: {product.price}</p>
              <p >{product.description}</p> 
              <p ></p> 
            </div>
            <div class="card-action">
              <Link to="/Carrito">Añadir al carrtito</Link>
           
            </div>
            
          </div>
        
        </div>
        <MiComponente  initial={1} cantidad={6}/>
      </div>
  );
};



export default ItemDetail