import { useCallback } from "react";
import { useStore } from "../services/store";

const useQuantity = (articleId) => {
  const { state, dispatch } = useStore();

  const article = state.cart[articleId] || {
    quantity: state.articles[articleId]
      ? state.articles[articleId].quantity
      : 0,
    price: state.articles[articleId] ? state.articles[articleId - 1].price : 0,
  };

  const updateQuantity = useCallback(
    (newQuantity) => {
      if (newQuantity === 0) {
        dispatch({type: "REMOVE_FROM_CART", payload: articleId});
      } else if (newQuantity === 1 && article.quantity === undefined) {
        dispatch({
          type: "ADD_TO_CART",
          payload: {
            id: articleId,
            quantity: 1,
            price: article.price,
          },
        })
      } else {
        console.log(
          "id: ",
          articleId,
          "prix: ",
          state.articles[articleId - 1].price,
          "Quantité: ",
          newQuantity,
        );
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
    [articleId, dispatch, article.price],
  );

  return { quantity: article.quantity, updateQuantity };
};

export default useQuantity;
