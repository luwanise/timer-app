import StopButton from "@/components/StopButton"
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";


export default function TimerRunning(){
    const { min, sec } = useLocalSearchParams<{min: string, sec: string}>()

    const [minutes, setMinutes] = useState(parseInt(min));
    const [seconds, setSeconds] = useState(parseInt(sec));

    const startTimer = () => {
        if (seconds > 0){
            setTimeout(() => { setSeconds(seconds-1) }, 1000); // reduce seconds by one every second
        } else {
            if (minutes > 0){
                setMinutes(minutes-1);
                setSeconds(59);
            }
        }
    }

    startTimer();

    return(
        <View style={styles.container}>
            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{String(minutes).padStart(2, '0')}</Text>
                <Text style={styles.timerText}>:</Text>
                <Text style={styles.timerText}>{String(seconds).padStart(2, '0')}</Text>
            </View>
            <StopButton/>
            <Text style={styles.reset}>Reset</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: Colors.background,
    },
    timerContainer: {
        alignItems: "center",
        flexDirection: "row"
    },
    timerText: {
        fontSize: 70,
        color: Colors.text
    },
    reset: {
        fontSize: 25,
        color: Colors.text,
        opacity: 0.5,
    }
});