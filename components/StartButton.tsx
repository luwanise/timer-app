import { Colors } from "@/constants/Colors";
import { Link, useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface StartButtonProps {
    minutes: number;
    seconds: number;
}

export default function StartButton({ minutes, seconds}: StartButtonProps) {
    return (
        <View style={styles.container}>
            <Link href={`/timerRunning?min=${minutes}&sec=${seconds}`} asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Start</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    button: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Colors.primary,
        fontSize: 40,
    }
})