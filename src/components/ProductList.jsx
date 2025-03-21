import { useState } from "react";

const ProductList = ({searchtext , sortby }) => {

const products = [
  {id:1, name: "ABCProductA", price:100.25,rating: 5},
  {id:2, name: "ABCDProductB", price:99.25,rating :4},
  {id:3, name: "CdsProductC", price:98.25,rating: 3},
  {id:4, name: "DProductD", price:95.00,rating: 4},

];
  let sortedProducts = products;
  if (sortby === "low") {
    sortedProducts = products.sort((a, b) => a.price - b.price);
  }

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchtext.toLowerCase())
  );

 return(
  <>
       
    <h1>ProductList</h1>
    <ul>
      {filteredProducts.map((product) => (
        <li key={product.id}>
            <h2>{product.name}</h2>
        <p>{product.price}</p>
        </li>
      ))}
    </ul>
  </>
 );
};
export default ProductList;