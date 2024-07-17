import React, { createContext, useReducer, useContext, useEffect } from "react";
import {
    fetchArticles,
    fetchCart,
    addToCart as addToCartAPI,
    removeFromCart as removeFromCartAPI,
    updateCart as updateCartAPI,
} from "../services/api";
import {NavigationContainer} from "@react-navigation/native";

const initialState = {
    articles: [],
    cart: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_ARTICLES":
            return { ...state, articles: action.payload };
        case "SET_CART":
            return { ...state, cart: action.payload };
        case "ADD_TO_CART":
            addToCartAPI(action.payload.id, action.payload.quantity, action.payload.price);
            return {
                ...state,
                cart: { ...state.cart, [action.payload.id]: action.payload },
            };
        case "REMOVE_FROM_CART":
            removeFromCartAPI(action.payload);
            const newCart = { ...state.cart };
            delete newCart[action.payload];
            return { ...state, cart: newCart };
        case "UPDATE_CART":
            updateCartAPI(
                action.payload.id,
                action.payload.quantity,
                action.payload.price,
            );
            return {
                ...state,
                cart: { ...state.cart, [action.payload.id]: action.payload },
            };
        case "EMPTY_CART":
            return { ...state, cart: {} };
        default:
            return state;
    }
};

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const initializeData = async () => {
            try {
                const articles = await fetchArticles();
                const cart = await fetchCart();
                dispatch({ type: "SET_ARTICLES", payload: articles });
                dispatch({
                    type: "SET_CART",
                    payload: Object.fromEntries(cart.map((item) => [item.id, item])),
                });
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };
        initializeData();
    }, []);

    return (
            <StoreContext.Provider value={{ state, dispatch }}>
                {children}
            </StoreContext.Provider>
    );
};

export const useArticlesContext = () => useContext(StoreContext);
