export const fetchArticles = async () => {
  try {
    const response = await fetch("http://localhost:7000/articles");
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

export const fetchCart = async () => {
  try {
    const response = await fetch("http://localhost:7000/cart");
    if (!response.ok) {
      throw new Error(`Failed to fetch cart: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

export const addToCart = async (articleId, quantity, price) => {
  try {
    const response = await fetch(`http://localhost:7000/cart`, {
      method: "POST",
      body: JSON.stringify({ id : articleId, quantity: quantity, price : price }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to add to cart");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const removeFromCart = async (articleId) => {
  try {
    const response = await fetch(`http://localhost:7000/cart/${articleId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to remove from cart");
    }
    return true;
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
};

export const updateCart = async (articleId, quantity, price) => {
  try {
    const response = await fetch(`http://localhost:7000/cart/${articleId}`, {
      method: "PUT",
      body: JSON.stringify({ quantity, price }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {

    }
    return await response.json();
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
};
