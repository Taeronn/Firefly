import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import Switcher from "./UI/Switcher/Switcher";
import SettingsBtn from "./UI/SvgComponents/Settings/SettingsBtn";

const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderBox = styled.View`
    align-items: center;
    display: flex;
`;

const Header = ({switchEnabled, toggleSwitch}) => {

    return (
        <HeaderView>
            <HeaderBox style={{flexDirection: 'row', justifyContent: "space-between", flex: 1}}>
                <TouchableOpacity opacity={0.5}>
                    <SettingsBtn style={{marginTop:10}}/>
                </TouchableOpacity>

            </HeaderBox>

            <HeaderBox>
                <Text style={styles.title}>Firefly</Text>
            </HeaderBox>

            <HeaderBox style={{flexDirection: 'row-reverse', flex: 1}}>
                <Switcher switchEnabled={switchEnabled} toggleSwitch={toggleSwitch}/>
            </HeaderBox>
        </HeaderView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: "Judson-Regular",
        color: "#fff",
        fontSize: 48,
    }
});

export default Header;