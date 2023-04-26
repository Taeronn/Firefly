import React, {useCallback, useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import Home from "./Home";
import Color from "./Color";
import Header from "../components/Header";
import Flashlight from "./Flashlight";
import Painting from "./Painting";
import Effects from "./Effects";
import Animations from "./Animations";

const Stack = createNativeStackNavigator();

export const Navigation = ({switchEnabled, toggleSwitch}) => {
    const navigationRef = useNavigationContainerRef();
    const [isHome, setIsHome] = useState(true);

    const navigate = useCallback((to) => {
        if(to === "Home") {
            setIsHome(true)
        } else {
            setIsHome(false)
            console.log('Setting isHome to false...')
        }
        console.log(`Navigating to: ${to}`);
        navigationRef.navigate(to);
    }, [])


    return (
        <NavigationContainer ref={navigationRef}>
            <Header switchEnabled={switchEnabled} toggleSwitch={toggleSwitch} navigate={navigate} isHome={isHome}/>
            <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
                <Stack.Screen name="Home" component={Home} initialParams={{navigate: navigate}}/>
                <Stack.Screen name="Flashlight" component={Flashlight}/>
                <Stack.Screen name="Color" component={Color}/>
                <Stack.Screen name="Painting" component={Painting}/>
                <Stack.Screen name="Effects" component={Effects}/>
                <Stack.Screen name="Animations" component={Animations}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};