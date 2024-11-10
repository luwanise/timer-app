import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { Colors } from "@/constants/Colors";

export default function TimePicker() {
    const [selectedMinute, setSelectedMinute] = useState(0);
    const [selectedSecond, setSelectedSecond] = useState(0);

    const minutes = Array.from({ length: 60 }, (_, i) => `  ${String(i).padStart(2, '0')}  `);
    const seconds = Array.from({ length: 60 }, (_, i) => `  ${String(i).padStart(2, '0')}  `);

    return (
        <View style={styles.container}>
            {/* Minute Picker */}
            <View style={styles.pickerContainer}>
                <ScrollPicker
                    dataSource={minutes}
                    selectedIndex={selectedMinute}
                    renderItem={(data, index) => (
                        <View>
                            <Text
                                style={[
                                    styles.scrollItem,
                                    index !== selectedMinute && styles.fadedItem,
                                ]}
                            >
                                {data}
                            </Text>
                        </View>
                    )}
                    onValueChange={(_, selectedIndex) => setSelectedMinute(selectedIndex)}
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
                    selectedIndex={selectedSecond}
                    renderItem={(data, index) => (
                        <View>
                            <Text
                                style={[
                                    styles.scrollItem,
                                    index !== selectedSecond && styles.fadedItem,
                                ]}
                            >
                                {data}
                            </Text>
                        </View>
                    )}
                    onValueChange={(_, selectedIndex) => setSelectedSecond(selectedIndex)}
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
        flex: 1,
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