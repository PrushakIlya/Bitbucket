import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
  },
  reducers: {
    setProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default counterSlice;
