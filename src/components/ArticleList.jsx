import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Article from "./Article";
import {NavigationContainer} from "@react-navigation/native";

const ArticleList = ({ articles }) => {
    return (
        <ScrollView style={styles.list}>
            {articles.map((article) => (
                <Article key={article.id} article={article} />
            ))}
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
});

export default ArticleList;
