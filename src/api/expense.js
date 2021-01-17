import axios from 'axios';

const AddExpense = async () => (
  axios.get('https://api-front-end-challenge.buildstaging.com/api/expense/add')
);

export default AddExpense;
