import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Quantity = ({ quantity = 0, onUpdate }) => {
    const handleDecrement = () => onUpdate(quantity - 1);
    const handleIncrement = () => onUpdate(quantity + 1);

    return (
        <View style={styles.container}>
            <Button title="-" onPress={handleDecrement} />
            <Text style={styles.quantity}>{quantity}</Text>
            <Button title="+" onPress={handleIncrement} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    quantity: {
        marginHorizontal: 10,
    },
});

export default Quantity;
