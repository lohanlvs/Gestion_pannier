import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { StoreProvider } from './src/hooks/store';
import MyStack from './src/components/Home';
import CartView from "./src/components/CartView";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <StoreProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="home" component={MyStack} />
                    <Stack.Screen name="cart" component={CartView} />
                </Stack.Navigator>
            </NavigationContainer>
        </StoreProvider>
    );
};

export default App;
