import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {COLORS} from "../components/constants/theme";
import Header from "../components/Header";

const Color = () => {
    return (
        <View style={styles.root}>
            <Text>COLOR</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.BG,
        padding: 20,
        paddingTop: 35
    },
    text: {
        color: COLORS.white,
        fontSize: 40,
        fontFamily: "Judson-Regular"
    }
});

export default Color;