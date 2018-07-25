import React from 'react';
import DeleteBTN from './DeleteBTN';
     
    const Product = (props) =>{
          
        return(
            <div className="items"> 

                <h4>Listing title: {props.title}</h4>
                <h4>Listing id: {props.id}</h4>
                <img src={props.url} alt="new product"></img>
                <DeleteBTN
                id={props.id}
                />
                <hr />
            </div>)
        }
export default Product;