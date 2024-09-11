import { createSlice } from '@reduxjs/toolkit';

type TInitialState = {
  cupon: string | null;
  discount: string | null;
};

const initialState: TInitialState = {
  cupon: null,
  discount: null,
};

const cuponSlice = createSlice({
  name: 'cupon',
  initialState,
  reducers: {
    setCupon: function (state, action) {
      const { cupon, discount } = action.payload;
      state.cupon = cupon;
      state.discount = discount;
    },
    removeCupon: function (state) {
      state.cupon = null;
      state.discount = null;
    },
  },
});

export const { setCupon, removeCupon } = cuponSlice.actions;
export default cuponSlice.reducer;
