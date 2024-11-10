import { StyleSheet, Text, View } from "react-native";
import StartButton from "@/components/StartButton";
import TimePicker from "@/components/TimePicker";
import { Colors } from "@/constants/Colors";
import { useState } from "react";

export default function Index() {

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <View style={styles.container}>
      <TimePicker onMinuteChange={setMinutes} onSecondChange={setSeconds}/>
      <StartButton minutes={minutes} seconds={seconds} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.background
  }
})