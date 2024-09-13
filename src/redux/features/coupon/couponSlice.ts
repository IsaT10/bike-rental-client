import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define the async thunk for fetching coupons
export const fetchCoupons = createAsyncThunk(
  'coupon/fetchCoupons',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/api/coupons'); // Replace with your actual API endpoint
      const data = await response.json();

      console.log(data?.data);
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch coupons');
      }

      return data?.data; // Return the fetched coupon data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Type for the coupon state
type TInitialState = {
  couponCode: string | null;
  discount: string | null;
  coupons: { couponCode: string; discount: string }[];
  loading: boolean;
  error: string | null;
};

// Initial state
const initialState: TInitialState = {
  couponCode: null,
  discount: null,
  coupons: [], // Initial coupon list
  loading: false,
  error: null,
};

// Coupon slice
const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    setCoupon: function (state, action) {
      const { couponCode, discount } = action.payload;
      state.couponCode = couponCode;
      state.discount = discount;
    },
    removeCoupon: function (state) {
      state.couponCode = null;
      state.discount = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoupons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoupons.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons = action.payload; // Store fetched coupons
      })
      .addCase(fetchCoupons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setCoupon, removeCoupon } = couponSlice.actions;
export default couponSlice.reducer;