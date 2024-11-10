import { StyleSheet, Text, View } from "react-native";
import StartButton from "@/components/StartButton";
import TimePicker from "@/components/TimePicker";
import { Colors } from "@/constants/Colors";

export default function Index() {
  return (
    <View style={styles.container}>
      <TimePicker />
      <StartButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background
  }
})