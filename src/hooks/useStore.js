import { useArticlesContext } from "./store";
import { useCallback } from "react";

const useQuantity = (articleId) => {
    const { state, dispatch } = useArticlesContext();

    const article = state.cart[articleId] || {
        quantity: state.articles[articleId] ? state.articles[articleId].quantity : 0,
        price: state.articles[articleId] ? state.articles[articleId -1].price : 0,
    };


    const updateQuantity = useCallback(
        (newQuantity) => {
            if (newQuantity <= 0) {
                dispatch({ type: "REMOVE_FROM_CART", payload: articleId });
            } else {
                console.log("================ ID :", articleId, "PRIX : ", state.articles[articleId -1].price, "Quantité:", newQuantity);
                dispatch({
                    type: "UPDATE_CART",
                    payload: {
                        id: articleId,
                        quantity: newQuantity,
                        price: parseFloat(article.price),
                    },
                });
            }
        },
        [articleId, dispatch, article.price]
    );

    return { quantity: article.quantity, updateQuantity };
};

export default useQuantity;
