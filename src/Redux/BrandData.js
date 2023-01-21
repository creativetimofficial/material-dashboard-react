import { useState } from "react";

const [query, setQuery] = useState("aveeno");

const BrandData = async () => {
  const result = await axios.get(
    `https://sls-ausse-dev-igloo-ipricematchdevapi.azurewebsites.net/api/pricematch/products/${query}?code=QTahLrKfjuROx68MKJlQ3CrtvAf9x4oQq62iSEzAfO54AzFuXOaEGw==`
  );
  setData(result.data.data);
};
