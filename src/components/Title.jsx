import React from "react";
import { Text, StyleSheet } from "react-native";

const Title = ({ title }) => {
    return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 20,
    },
});

export default Title;
