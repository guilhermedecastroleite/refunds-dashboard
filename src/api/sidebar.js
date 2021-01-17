import axios from 'axios';

const getSidebarData = async () => (
  axios.get('https://api-front-end-challenge.buildstaging.com/api/sidebar')
);

export default getSidebarData;
