import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArticleView from './ArticleView';
import Footer from './Footer';
import {Button, StyleSheet, Text, View} from 'react-native';
import Article from './Article';
import {StoreProvider} from "../hooks/store";

const Stack = createNativeStackNavigator();

const MyStack = ({ navigation }) => {
    return (
        <StoreProvider>
        <View style={styles.container}>
            <ArticleView />
            <Text></Text>
            <Footer />
            <Button
                title="Panier"
                onPress={() => navigation.navigate('cart')}
            />
            <Button
                title="Vider le panier"
                onPress={() => navigation.navigate('cart')}
            />
        </View>
        </StoreProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MyStack;
