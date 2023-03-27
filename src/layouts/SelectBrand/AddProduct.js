/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [sku, setSku] = useState(0);
  const [message, setMessage] = useState("");

  const addProduct = async () => {
    try {
      const result = await fetch(
        "https://sls-ausse-dev-igloo-ipricematchdevapi.azurewebsites.net/api/pricematch/products/",
        {
          method: "POST",
          body: JSON.stringify({
            id: uuidv4(),
            name,
            description,
            quantity,
            tags,
            price,
            brand,
            sku,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      // const resJson = await result.json();
      if (result.status === 200) {
        setName("");
        setId("");
        setDescription("");
        setQuantity("");
        setTags("");
        setPrice("");
        setBrand("");
        setSku("");
        setMessage("Product added successfully");
      } else {
        setMessage("ERROR");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    if (
      name !== "" &&
      id !== "" &&
      description !== "" &&
      quantity !== "" &&
      tags !== "" &&
      price !== "" &&
      brand !== "" &&
      sku !== ""
    ) {
      addProduct(name, id, description, quantity, tags, price, brand, sku);
    } else {
      setMessage("Cannot Be Empty");
    }
  };

  return (
    <div className="Form">
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Product ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <textarea
            name=""
            cols="10"
            rows="8"
            placeholder="Enter Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Product Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <textarea
            name=""
            placeholder="Enter Product Tags"
            id=""
            cols="10"
            rows="8"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Product Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Product SKU"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
          <button type="submit">Add Product</button>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
      {/* ... */}
    </div>
  );
}
