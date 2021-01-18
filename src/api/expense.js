import axios from 'axios';

const addExpense = async ({ data }) => (
  axios({
    method: 'post',
    url: 'https://api-front-end-challenge.buildstaging.com/api/expense/add',
    data,
  })
);

export default addExpense;
