import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { Colors } from "@/constants/Colors";

interface TimePickerProps {
    onMinuteChange: (minute: number) => void
    onSecondChange: (second: number) => void
}

export default function TimePicker({ onMinuteChange, onSecondChange }: TimePickerProps) {

    const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
    const seconds = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));

    return (
        <View style={styles.container}>
            {/* Minute Picker */}
            <View style={styles.pickerContainer}>
                <ScrollPicker
                    dataSource={minutes}
                    selectedIndex={0}
                    renderItem={(minute, _, isSelected) => (
                        <View>
                            <Text
                                style={[
                                    styles.scrollItem,
                                    !isSelected && styles.fadedItem
                                ]}
                            >
                                {minute}
                            </Text>
                        </View>
                    )}
                    onValueChange={(minute, _) => onMinuteChange(Number(minute))}
                    wrapperHeight={180}
                    wrapperBackground={Colors.background}
                    itemHeight={60}
                    highlightColor={Colors.primary}
                    highlightBorderWidth={1}
                />
                <Text style={styles.label}>m</Text>
            </View>

            {/* Second Picker */}
            <View style={styles.pickerContainer}>
                <ScrollPicker
                    dataSource={seconds}
                    selectedIndex={0}
                    renderItem={(second, _, isSelected) => (
                        <View>
                            <Text
                                style={[
                                    styles.scrollItem,
                                    !isSelected && styles.fadedItem
                                ]}
                            >
                                {second}
                            </Text>
                        </View>
                    )}
                    onValueChange={(second, _) => onSecondChange(Number(second))}
                    wrapperHeight={180}
                    wrapperBackground={Colors.background}
                    itemHeight={60}
                    highlightColor={Colors.primary}
                    highlightBorderWidth={1}
                />
                <Text style={styles.label}>s</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    pickerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        padding: 10,
        height: '40%',
        width: '40%',
        backgroundColor: Colors.background,
    },
    label: {
        fontSize: 18,
        color: Colors.text,
        marginLeft: 10,
    },
    scrollItem: {
        fontSize: 30,
        color: Colors.text,
        textAlign: "center",
    },
    fadedItem: {
        opacity: 0.5,
    },
});