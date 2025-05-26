import axios from 'axios';

let salesList = [
  {
    id: '4578C26',
    img: '',
    title: 'Constantine',
    language: 'Inglés',
    costPerNight: 25,
    costToBuy: 115,
  },
  {
    id: '9975F28',
    img: '',
    title: '50 First Dates',
    language: 'Inglés',
    costPerNight: 20,
    costToBuy: 125,
  },
  {
    id: '5671FMF1',
    img: '',
    title: 'Fantastic Mr. Fox',
    language: 'Inglés',
    costPerNight: 35,
    costToBuy: 150,
  },
];

const getSales = async () => {
  //return await axios.get('http://localhost:3001/movies');
  return { data: salesList };
}

const deleteSale = async (id) => {
  //return await axios.delete('http://localhost:3001/movies/' + id);
  const filteredSales = salesList.filter(sale => sale.id !== id);
  salesList = filteredSales;
  return true;
}

const updateSales = async (id, data) => {
  //return await axios.patch('http://localhost:3001/movies/' + id, data);
  const saleIndex = salesList.findIndex(sale => sale.id === id);
  const salesListToEdit = [...salesList];
  salesListToEdit[saleIndex] = {
    ...salesList[saleIndex],
    ...data,
  };
  salesList = salesListToEdit;
  return true;
}

const addSale = async (data) => {
  //return await axios.post('http://localhost:3001/movies/', data);
  const salesListToAdd = [...salesList];
  salesListToAdd.push({
    id: salesList.length + 1,
    ...data,
  });
  salesList = salesListToAdd;
  return true;
}

const getSaleById = async (id) => {
  //return await axios.get('http://localhost:3001/movies/' + id);
  const saleIndex = salesList.findIndex(sale => sale.id === id);
  return { data: salesList[saleIndex] };
}

export default {
  getSales,
  deleteSale,
  updateSales,
  addSale,
  getSaleById,
}