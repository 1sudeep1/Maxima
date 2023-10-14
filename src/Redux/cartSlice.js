import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    quantity: 0,
    quantity1:0,
    cartItems: [],
    totalAmount: 0,
    wishListItems: []
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

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishList: (state, { payload }) => {
            const isItemExist = state.wishListItems.find((item) => item.id === payload.id);
            if (!isItemExist) {
                state.wishListItems = [...state.wishListItems, { ...payload, quantity1: 1 }];
            }else{
                state.cartItems = state.cartItems.map((item) => {
                    if (item.id === payload.id) {
                        return { ...item, quantity1: item.quantity1 + 1 };
                    } else {
                        return item;
                    }
                });
            }
            state.quantity1++;
        },

        removeFromWishList: (state, { payload }) => {
            // const productPrice = parseFloat(payload.productPrice.replace(/,/g, '')); // Remove commas and parse as a float

            state.wishListItems = state.wishListItems.filter((item) => item.id !== payload.id);
            state.quantity1 -= payload.quantity1;
            // state.totalAmount -= productPrice * payload.quantity; // Use the parsed productPrice for calculations
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { addToWishList, removeFromWishList } = wishlistSlice.actions;

// Selectors to get the totalAmount with commas as a string
// export const selectTotalAmountFormatted = (state) =>
//     state.cart.totalAmount.toLocaleString();

    export const cartReducer = cartSlice.reducer;
    export const wishlistReducer = wishlistSlice.reducer;
