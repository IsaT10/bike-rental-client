import { createSlice } from '@reduxjs/toolkit';

type TBooking = {
  bikeId: string | null;
  startTime: string | null;
  advancedPayment: number | null;
};

const initialState: TBooking = {
  bikeId: null,
  startTime: null,
  advancedPayment: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBooking: (state, action) => {
      const { bikeId, startTime, advancedPayment } = action.payload;

      state.bikeId = bikeId;
      state.startTime = startTime;
      state.advancedPayment = advancedPayment;
    },
    clearBooking: (state) => {
      state.bikeId = null;
      state.startTime = null;
      state.advancedPayment = null;
    },
  },
});

export const { setBooking, clearBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
