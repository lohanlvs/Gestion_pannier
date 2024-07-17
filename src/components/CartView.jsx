import React from "react";
import { View, TouchableOpacity, Text, Alert, StyleSheet } from "react-native";
import { useArticlesContext } from "../hooks/store";
import ArticleList from "./ArticleList";
import Title from "./Title";

const CartView = () => {
    const { state, dispatch } = useArticlesContext();
    const { articles, cart } = state;

    const handleEmptyCart = () => {
        dispatch({ type: "EMPTY_CART" });
    };

    const totalPrice = Object.values(cart).reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handlePlaceOrder = () => {
        const today = new Date();
        const deliveryDate = new Date(today);
        deliveryDate.setDate(today.getDate() + 3);

        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = deliveryDate.toLocaleDateString("fr-FR", options);
        Alert.alert(
            `Confirmation de la commande de ${totalPrice.toFixed(2)}€`,
            `Vos articles arriveront le ${formattedDate}`,
        );
    };

    const cartDetails = Object.values(cart).map((cartItem) => {
        return articles.find((article) => article.id === cartItem.id);
    });

    return (
        <View style={styles.container}>
            <Title title="Panier" />
            <ArticleList articles={Object.values(cartDetails)} />
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={handleEmptyCart}>
                    <Text style={styles.buttonText}>Vider le panier</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handlePlaceOrder}>
                    <Text style={styles.buttonText}>Commander</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
});

export default CartView;
