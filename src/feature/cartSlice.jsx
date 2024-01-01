import { createSlice } from "@reduxjs/toolkit";
import productData from "../ProductData";

const initialState = {
    cart : [],
    items : productData,
    totlaQuantity: 0,
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{

    }
})

export default cartSlice.reducer;