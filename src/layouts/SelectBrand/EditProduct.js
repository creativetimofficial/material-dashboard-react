// eslint-disable
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Form.css";

// eslint-disable-next-line
export default function EditProduct() {
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [sku, setSku] = useState(0);
  const [message, setMessage] = useState("");
  const [navigateBack, setNavigateBack] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  useEffect(() => {
    if (state && state.data) {
      setName(state.data.name);
      setId(state.data.id);
      setDescription(state.data.description);
      setQuantity(state.data.quantity);
      setTags(state.data.tags);
      setPrice(state.data.price);
      setBrand(state.data.brand);
      setSku(state.data.sku);
    }
  }, [state]);

  const editProductData = async () => {
    try {
      const result = await fetch(
        `https://sls-ausse-dev-igloo-ipricematchdevapi.azurewebsites.net/api/pricematch/products/${id}?code=QTahLrKfjuROx68MKJlQ3CrtvAf9x4oQq62iSEzAfO54AzFuXOaEGw==`,
        {
          method: "PUT",
          body: JSON.stringify({
            id: setId,
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
        setMessage("Product updated successfully");
        setNavigateBack(true);
      } else {
        setMessage("ERROR");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    if (navigateBack) {
      navigate("/brand");
    }
  }, [navigateBack]);

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
      editProductData();
      //   not passing the values in above function as we are passing them in funcation call
    } else {
      setMessage("error");
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
          <button type="submit">Update Product</button>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
      {/* ... */}
    </div>
  );
}
