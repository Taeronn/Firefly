import React from 'react';
import { Slider } from '@rneui/themed';
import {COLORS} from "../../constants/theme";

const CustomSlider = ({sliderValue, setSliderValue, minimumValue, maximumValue, step}) => {
    return (
        <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            maximumValue={maximumValue}
            minimumValue={minimumValue}
            step={step}
            allowTouchTrack
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor={COLORS.tertiary}
            trackStyle={{ height: 14, backgroundColor: "transparent", borderRadius: 20 }}
            thumbStyle={{ height: 30, width: 30, backgroundColor: COLORS.tertiary, borderColor: COLORS.white, borderWidth: 5}}
        />
    );
};

export default CustomSlider;