import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {COLORS} from "../components/constants/theme";
import { LinearGradient } from 'expo-linear-gradient';
import FlashlightIcon from "../components/UI/SvgComponents/HomeIcons/FlashlightIcon";
import RainbowIcon from "../components/UI/SvgComponents/HomeIcons/RainbowIcon";
import PaintingIcon from "../components/UI/SvgComponents/HomeIcons/PaintingIcon";
import EffectsIcon from "../components/UI/SvgComponents/HomeIcons/EffectsIcon";
import AnimationsIcon from "../components/UI/SvgComponents/HomeIcons/AnimationsIcon";

const Home = ({route}) => {
    // <HomeHeader switchEnabled={switchEnabled} toggleSwitch={toggleSwitch}/>
    const { navigate } = route.params;
    return (
        <View style={styles.root} >
            <View style={styles.body}>
                <LinearGradient
                    colors={[COLORS.tertiary, COLORS.secondary]}
                    start={{x: 0, y:0}}
                    end={{x:1, y:0}}
                    style={styles.bodyBox}
                    onTouchStart={() => navigate('Color')}
                >
                    <View style={styles.bodyBoxIcon}>
                        <FlashlightIcon/>
                    </View>
                    <View style={styles.bodyBoxText}>
                        <Text style={styles.text}>Flashlight</Text>
                    </View>
                </LinearGradient>

                <LinearGradient
                    colors={[COLORS.tertiary, COLORS.secondary]}
                    start={{x: 0, y:0}}
                    end={{x:1, y:0}}
                    style={styles.bodyBox}
                >
                    <View style={styles.bodyBoxIcon}>
                        <RainbowIcon/>
                    </View>
                    <View style={styles.bodyBoxText}>
                        <Text style={styles.text}>Color</Text>
                    </View>
                </LinearGradient>

                <LinearGradient
                    colors={[COLORS.tertiary, COLORS.secondary]}
                    start={{x: 0, y:0}}
                    end={{x:1, y:0}}
                    style={styles.bodyBox}
                >
                    <View style={styles.bodyBoxIcon}>
                        <PaintingIcon/>
                    </View>
                    <View style={styles.bodyBoxText}>
                        <Text style={styles.text}>Painting</Text>
                    </View>
                </LinearGradient>

                <LinearGradient
                    colors={[COLORS.tertiary, COLORS.secondary]}
                    start={{x: 0, y:0}}
                    end={{x:1, y:0}}
                    style={styles.bodyBox}
                >
                    <View style={styles.bodyBoxIcon}>
                        <EffectsIcon/>
                    </View>
                    <View style={styles.bodyBoxText}>
                        <Text style={styles.text}>Effects</Text>
                    </View>
                </LinearGradient>

                <LinearGradient
                    colors={[COLORS.tertiary, COLORS.secondary]}
                    start={{x: 0, y:0}}
                    end={{x:1, y:0}}
                    style={styles.bodyBox}
                >
                    <View style={styles.bodyBoxIcon}>
                        <AnimationsIcon/>
                    </View>
                    <View style={styles.bodyBoxText}>
                        <Text style={styles.text}>Animations</Text>
                    </View>
                </LinearGradient>
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
    body: {
        flex: 1
    },
    bodyBox: {
        flex: 1,
        flexDirection: "row",
        borderRadius: 12,
        margin: '2%',
        alignItems: "center"
    },
    bodyBoxIcon: {
        flex: 3,
        flexDirection: "row",
        justifyContent: "center"
    },
    bodyBoxText: {
        flex: 6,
        flexDirection: "row",
        justifyContent: "center"
    }
});

export default Home;