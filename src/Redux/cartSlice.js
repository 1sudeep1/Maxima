import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    quantity: 0,
    cartItems: [],
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const isItemExist = state.cartItems.find((item) => item.id === payload.id);
            const productPrice = parseFloat(payload.productPrice.replace(/,/g, '')); // Remove commas and parse as a float

            if (!isItemExist) {
                state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
            } else {
                state.cartItems = state.cartItems.map((item) => {
                    if (item.id === payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
            state.quantity++;
            state.totalAmount += productPrice; // Use the parsed productPrice for calculations
        },
        removeFromCart: (state, { payload }) => {
            const productPrice = parseFloat(payload.productPrice.replace(/,/g, '')); // Remove commas and parse as a float

            state.cartItems = state.cartItems.filter((item) => item.id !== payload.id);
            state.quantity -= payload.quantity;
            state.totalAmount -= productPrice * payload.quantity; // Use the parsed productPrice for calculations
        },
        
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors to get the totalAmount with commas as a string
export const selectTotalAmountFormatted = (state) =>
    state.cart.totalAmount.toLocaleString();

export default cartSlice.reducer;
