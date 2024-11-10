import StopButton from "@/components/StopButton"
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

export default function TimerRunning(){
    const { min, sec } = useLocalSearchParams<{min: string, sec: string}>()

    const [minutes, setMinutes] = useState(parseInt(min));
    const [seconds, setSeconds] = useState(parseInt(sec));

    const [sound, setSound] = useState<Sound>();

    async function playAlarm() {
        const { sound } = await Audio.Sound.createAsync( require('../assets/audio/alarm.mp3'));
        setSound(sound);

        await sound.playAsync();
    }

    async function stopAlarm() {
        await sound?.pauseAsync();
    }

    useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);

    useEffect(() => {
        if (minutes === 0 && seconds === 0){
            // play alarm
            playAlarm();
            return;
        }

        const timer = setTimeout(() => {
            if (seconds > 0){
                setSeconds(seconds-1); // reduce seconds by one every second
            } else if (minutes > 0){
                setSeconds(59);
                setMinutes(minutes-1);
            }
        }, 1000);

        return () => clearTimeout(timer)
    }, [minutes, seconds]);

    const resetTimer = () => {
        setMinutes(parseInt(min));
        setSeconds(parseInt(sec));
        stopAlarm();
    }

    return(
        <View style={styles.container}>
            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{String(minutes).padStart(2, '0')}</Text>
                <Text style={styles.timerText}>:</Text>
                <Text style={styles.timerText}>{String(seconds).padStart(2, '0')}</Text>
            </View>
            <StopButton/>
            <Text style={styles.reset} onPress={resetTimer}>Reset</Text>
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