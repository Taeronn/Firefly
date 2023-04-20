import React from 'react';
import {Switch} from "react-native";
import {COLORS} from "../../constants/theme";

const Switcher = ({switchEnabled, toggleSwitch}) => {
    return (
        <Switch
            style={{marginTop: 8,  transform:[{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
            trackColor={{false: COLORS.secondary, true: COLORS.primary}}
            thumbColor={COLORS.white}
            onValueChange={toggleSwitch}
            value={switchEnabled}
        />
    );
};

export default Switcher;