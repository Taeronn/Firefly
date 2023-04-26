import React from 'react';
import {Text, View} from "react-native";
import CustomSlider from "./UI/Slider/CustomSlider";
import {COLORS} from "./constants/theme";

const Footer = ({text = "Brightness", symbol = "%", value, setValue, minimumValue = 0, maximumValue = 100, step = 1}) => {
    return (
        <View>
            <Text style={styles.footerMainText}>{value}{symbol}</Text>
            <Text style={styles.footerSideText}>{text}</Text>
            <CustomSlider
                sliderValue={value}
                setSliderValue={setValue}
                minimumValue={minimumValue}
                maximumValue={maximumValue}
                step={step}
            />
        </View>
    );
};

const styles = {
    footerMainText: {
        color: COLORS.white,
        fontSize: 70,
        fontFamily: "Judson-Regular"
    },
    footerSideText: {
        color: COLORS.secondary,
        fontSize: 24,
        fontFamily: "Judson-Regular",
        marginTop: "-3%"
    }
}

export default Footer;