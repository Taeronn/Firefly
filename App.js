import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from "react-native";
import { Navigation } from './src/screens/Navigation';
import Header from "./src/components/Header";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {COLORS} from "./src/components/constants/theme";
import {StatusBar} from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function App() {
    // STATES:
    const [switchEnabled, setSwitchEnabled] = useState(false);
    const [text, setText] = useState('Turn the switch');

    // FONTS:
    const [fontsLoaded] = useFonts({
        'Judson-Regular': require('./src/assets/fonts/Judson-Regular.ttf')
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    if (!fontsLoaded) {
        return null;
    }

    function toggleSwitch() {
        if(switchEnabled) {
            setText('Inactive') //запрос на выключение
        } else {
            setText('Active') //запрос на включение + режим
        }
        setSwitchEnabled(previousState => !previousState);
    }

    return (
      <View style={styles.root} onLayout={onLayoutRootView}>
          <Navigation switchEnabled={switchEnabled} toggleSwitch={toggleSwitch}/>
          <StatusBar style="light"/>
      </View>
  );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.BG,
        padding: 20,
        paddingTop: 35
    }
});

