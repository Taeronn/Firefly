import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {COLORS} from "../components/constants/theme";

const Painting = () => {
    return (
        <View style={styles.root}>
            <View style={styles.header}>
                <View style={styles.modeTable}>
                    <Text style={styles.modeTableText}>painting</Text>
                </View>
            </View>
            <View style={styles.body}>

            </View>
            <View style={styles.footer}>

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
        backgroundColor: COLORS.secondary,
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
        flex: 9
    },
    footer: {
        flex: 5,
        backgroundColor: "red"
    }
});

export default Painting;