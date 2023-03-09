import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {useCallback, useState} from "react";
import Header from "./src/components/Header";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [switchEnabled, setSwitchEnabled] = useState(false);
  const [text, setText] = useState('Turn the switch');
  const [fontsLoaded] = useFonts({
        'Judson-Regular': require('./assets/fonts/Judson-Regular.ttf')
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
        <Header switchEnabled={switchEnabled} toggleSwitch={toggleSwitch}/>

        <Text style={styles.text}>{text}</Text>
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    padding: 20,
    paddingTop: 35
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Judson-Regular"
  }
});
