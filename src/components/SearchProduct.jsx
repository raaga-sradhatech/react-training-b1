import ProductList from "./ProductList";

import { useState } from "react";

function SearchProduct() {

    const products = [
        {id:1, name: "ABCProductA", price:100.25,rating: 5},
        {id:2, name: "ABCDProductB", price:99.25,rating :4},
        {id:3, name: "CdsProductC", price:98.25,rating: 3},
        {id:4, name: "DProductD", price:95.00,rating: 4},
      
      ];

    const [searchValue, setSearchValue] = useState("");
    const [sortValue, setSortValue] = useState("");

    

    const sortlow = () => {
        setSortValue("low");

    }
    const settextbox = (value) => {
        setSearchValue(value);
    }
  return (
    <>
    <div className="search-product">
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchValue}
        onChange={(e) => settextbox(e.target.value)}
      />

      <button onClick={sortlow}>sort by low price</button>
    </div>

    <ProductList searchtext={searchValue} sortby={sortValue}></ProductList>
    </>
  );
}

export default SearchProduct;