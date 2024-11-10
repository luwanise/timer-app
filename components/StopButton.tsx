import { Colors } from "@/constants/Colors";
import { Link, useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StartButton() {
    return (
        <View style={styles.container}>
            <Link href={"/"} asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Stop</Text>
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
        borderColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Colors.secondary,
        fontSize: 40,
    }
})