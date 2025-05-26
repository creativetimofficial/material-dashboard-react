import axios from 'axios';

let clientsList = [
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

const getClients = async (filter = undefined) => {
  let url = 'http://localhost:3000/api/clients';
  if (filter) {
    url += `?${encodeToQueryString(filter)}`
  }
  const data = await axios.get(url);
  return { data: clientsList, data };
}

const deleteClient = async (id) => {
  //return await axios.delete('http://localhost:3000/movies/' + id);
  const filteredClients = clientsList.filter(client => client.id !== id);
  clientsList = filteredClients;
  return true;
}

const updateClients = async (id, data) => {
  //return await axios.patch('http://localhost:3000/movies/' + id, data);
  const clientIndex = clientsList.findIndex(client => client.id === id);
  const clientsListToEdit = [...clientsList];
  clientsListToEdit[clientIndex] = {
    ...clientsList[clientIndex],
    ...data,
  };
  clientsList = clientsListToEdit;
  return true;
}

const addClient = async (data) => {
  //return await axios.post('http://localhost:3000/movies/', data);
  const clientsListToAdd = [...clientsList];
  clientsListToAdd.push({
    id: clientsList.length + 1,
    ...data,
  });
  clientsList = clientsListToAdd;
  return true;
}

const getClientById = async (id) => {
  //return await axios.get('http://localhost:3000/movies/' + id);
  const clientIndex = clientsList.findIndex(client => client.id === id);
  return { data: clientsList[clientIndex] };
}

const encodeToQueryString = (params) => {
  return Object.entries(params)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map(val => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join('&');
      } else {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }
    })
    .join('&');
};

export default {
  getClients,
  deleteClient,
  updateClients,
  addClient,
  getClientById,
}