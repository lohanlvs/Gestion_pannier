import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import ArticleList from "../components/ArticleList";
import { useArticlesContext } from "../hooks/store";

const ArticleView = () => {
    const { state } = useArticlesContext();
    const { articles } = state;

    return (
        <View style={styles.container}>
            <Title title="Articles" />
            <ArticleList articles={articles} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ArticleView;
