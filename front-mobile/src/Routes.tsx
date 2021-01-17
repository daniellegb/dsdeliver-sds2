import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions, HeaderBackground } from "@react-navigation/stack";
import Home from "./Home";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
import Header from "./Header";

const Stack = createStackNavigator();

function Routes () {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle:{
                        backgroundColor: '#FFF'
                    }
                }}
            >
                
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
                <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>


            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Routes;