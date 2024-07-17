import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Button} from "react-native";
import { useArticlesContext } from "../hooks/store";

const Footer = () => {
    const { state } = useArticlesContext();
    const { cart } = state;

    const totalQuantity = Object.values(cart).reduce(
        (total, item) => total + (item.quantity || 0),
        0
    );

    const totalPrice = Object.values(cart).reduce(
        (total, item) => {
            console.log(total, item.price, item.quantity)
            return total + item.price * item.quantity
        },
    0
    );

    return (
        <View style={styles.footer}>
            <Text style={styles.text}>Total Articles: {totalQuantity}</Text>
            <Text style={styles.text}>Total Price: {totalPrice.toFixed(2)} €</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        padding: 10,
    },
    text: {
        fontSize: 16,
    },
});

export default Footer;
