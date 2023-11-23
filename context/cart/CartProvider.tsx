import { FC, useEffect, useReducer } from 'react';
import * as React from 'react';
import { CartContext, cartReducer } from './';
import { ICartProduct } from '@/interfaces/cart';

export interface CartState {
    cart: ICartProduct[];
    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;
    children?: React.ReactNode;
}


const CART_INITIAL_STATE: CartState = {
    cart: [],
    numberOfItems: 0,
    subTotal: 0,
    tax: 0,
    total: 0,
}


export const CartProvider:React.FC<CartState> = ({ children }) => {

    const [state, dispatch] = useReducer( cartReducer , CART_INITIAL_STATE );

    return (
        <CartContext.Provider value={{
            ...state,

            // Methods
            // addProductToCart,
            // removeCartProduct,
            // updateCartQuantity,
        }}>
            { children }
        </CartContext.Provider>
    )
};