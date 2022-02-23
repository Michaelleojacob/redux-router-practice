import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
  name: 'shop',
  initialState: [
    {
      name: '1',
      price: '1',
      availability: 'in-store',
      id: '516452',
    },
    {
      name: '2',
      price: '2',
      availability: 'in-store',
      id: '5465',
    },
    {
      name: '3',
      price: '3',
      availability: 'in-store',
      id: '5741',
    },
    {
      name: '4',
      price: '4',
      availability: 'in-store',
      id: '9652',
    },
    {
      name: '5',
      price: '5',
      availability: 'in-store',
      id: '2222',
    },
    {
      name: '6',
      price: '6',
      availability: 'in-store',
      id: '7412',
    },
  ],
  reducers: {},
});

export default shopSlice.reducer;
