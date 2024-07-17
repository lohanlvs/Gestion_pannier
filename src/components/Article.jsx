import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Quantity from "./Quantity";
import useQuantity from "../hooks/useQuantity";

const Article = ({ article }) => {
    const { quantity, updateQuantity } = useQuantity(article.id);

    return (
        <View style={styles.article}>
            <Image source={{ uri: `http://localhost:7000${article.image}` }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.description}>{article.description}</Text>
                <Text style={styles.price}>{article.price} €</Text>
                <Quantity quantity={quantity} onUpdate={updateQuantity} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    article: {
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        alignItems: "center",
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 15,
    },
    details: {
        flex: 1,
        justifyContent: "center",
    },
    description: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    price: {
        fontSize: 16,
        color: "#888",
        marginBottom: 10,
    },
});

export default Article;
