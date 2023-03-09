import React from 'react';
import {Switch} from "react-native";

const Switcher = ({switchEnabled, toggleSwitch}) => {
    return (
        <Switch
            style={{marginTop: 8}}
            trackColor={{false: '#5B5A5A', true: '#B337FF'}}
            onValueChange={toggleSwitch}
            value={switchEnabled}
        />
    );
};

export default Switcher;