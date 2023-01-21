import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
    addProduct(name, id, description, quantity, tags, price, brand, sku);
  };

  return (
    <div className="app">
      <div className="add-post-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="entername"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="enterid"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <textarea
            name=""
            className="form-control"
            cols="10"
            rows="8"
            placeholder="enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="enter qty"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <textarea
            name=""
            className="form-control"
            placeholder="enter tags"
            id=""
            cols="10"
            rows="8"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="enterprice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="enter brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="entersku"
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
