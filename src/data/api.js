import axios from 'axios';

const baseURL = 'https://zoo-animal-api.herokuapp.com';

const http = axios.create({
  baseURL,
  timeout: 5000,
});

const getData = async function (route) {
  const { data } = await http.get(route);
  return data;
};

export default getData;
