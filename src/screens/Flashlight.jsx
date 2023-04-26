import React, {useState} from 'react';
import { RadialGradient } from 'react-native-gradients';
import {StyleSheet, View, Text, Image} from "react-native";
import {COLORS} from "../components/constants/theme";
import Footer from "../components/Footer";
import {colorTemperature2rgb} from "color-temperature";

const Flashlight = () => {
    const [brightnessValue, setBrightnessValue] = useState(0)
    const [temperatureValue, setTemperatureValue] = useState(3200);

    function colorPrettify(K) {
        let color = colorTemperature2rgb(K);
        return `rgb(${color.red}, ${color.green}, ${color.blue})`
    }

    function brightnessPrettify(P) {
        let brightness = P * 0.006;
        return `${brightness}`
    }

    const colorList = [
        {offset: '0%', color: colorPrettify(temperatureValue), opacity: brightnessPrettify(brightnessValue)},
        {offset: '100%', color: 'white', opacity: '0'}
    ]

    return (
        <View style={styles.root}>
            <View style={{position: 'absolute', width: "100%", height: "100%"}}>
                <RadialGradient
                    x="50%"
                    y="40%"
                    rx="80%"
                    ry="40%"
                    colorList={colorList}
                />
            </View>
            <View style={styles.header}>
                <View style={styles.modeTable}>
                    <Text style={styles.modeTableText}>flashlight</Text>
                </View>
            </View>
            <View style={styles.body}>
                <Image source={require('../assets/images/flashlight.png')}/>
            </View>
            <View style={styles.footer}>
                <Footer
                    text="Temperature"
                    symbol="K"
                    value={temperatureValue}
                    setValue={setTemperatureValue}
                    minimumValue={1900}
                    maximumValue={7000}
                    step={100}
                />
                <Footer
                    value={brightnessValue}
                    setValue={setBrightnessValue}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.BG
    },
    text: {
        color: COLORS.white,
        fontSize: 40,
        fontFamily: "Judson-Regular"
    },
    header: {
        flex: 1,
        alignItems: "center",
    },
    modeTable: {
        flex: 1,
        backgroundColor: 'rgba(62, 62, 62, 0.7)',
        borderRadius: 10,
        width: "70%",
        alignItems: "center",
        justifyContent: "center"
    },
    modeTableText: {
        color: COLORS.white,
        fontSize: 32,
        fontFamily: "Judson-Regular"
    },
    body: {
        flex: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    bodyBackground: {
        flex: 1,
        backgroundColor: '#FFCB7E',
        borderRadius: 180,

    },
    footer: {
        flex: 6,
        margin: "7%"
    }
});

export default Flashlight;