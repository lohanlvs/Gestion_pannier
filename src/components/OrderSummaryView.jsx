import React from "react";
import {View, Text, FlatList, StyleSheet, Button} from "react-native";
import { useArticlesContext } from "../hooks/store";

const OrderSummaryView = ({navigation}) => {
    const { state } = useArticlesContext();
    const { cart } = state;

    const filteredItems = Object.keys(cart)
        .filter(id => cart[id].quantity >= 1)
        .map(id => ({ ...cart[id], id }));

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>Price: {item.price} €</Text>
            <Text>Quantity: {item.quantity}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
});

export default OrderSummaryView;
