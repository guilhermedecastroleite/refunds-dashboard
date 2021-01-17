import axios from 'axios';

const getTimelineData = async () => (
  axios.get('https://api-front-end-challenge.buildstaging.com/api/timeline')
);

export default getTimelineData;
