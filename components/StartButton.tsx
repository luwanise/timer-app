import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StartButton() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    button: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#baaaff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#baaaff',
        fontSize: 40,
    }
})