import axios from 'axios';

const getHeaderData = async () => (
  axios.get('https://api-front-end-challenge.buildstaging.com/api/header')
);

export default getHeaderData;
