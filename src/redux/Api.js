import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const GET_GREETING = 'get_greeting';

const url = 'http://localhost:3000/api/greetings';

const getGreeting = createAsyncThunk(GET_GREETING, async () => {
  const { data } = await axios.get(url);
  return data;
});

export default getGreeting;