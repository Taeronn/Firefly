import React, {useEffect, useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import Home from "./Home";
import Color from "./Color";
import {View} from "react-native";
import Header from "../components/Header";
import SettingsBtn from "../components/UI/SvgComponents/Settings/SettingsBtn";

const Stack = createNativeStackNavigator();

export const Navigation = ({switchEnabled, toggleSwitch}) => {
    const navigationRef = useNavigationContainerRef();
    const [isHome, setIsHome] = useState(true);
    function navigate(to) {
        if(to === "Home") {
            setIsHome(true)
        } else {
            setIsHome(false)
        }
        navigationRef.navigate(to);
    }


    return (
        <NavigationContainer ref={navigationRef}>
            <Header switchEnabled={switchEnabled} toggleSwitch={toggleSwitch} navigate={navigate} isHome={isHome}/>
            <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
                <Stack.Screen name="Home" component={Home} initialParams={{navigate: navigate}}/>
                <Stack.Screen name="Color" component={Color}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};