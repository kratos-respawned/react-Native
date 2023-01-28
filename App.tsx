import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>{count}</Text>
      <TextInput
        style={{
          color: "red",
          borderColor: "red",
          borderWidth: 1,
          margin: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: "#000",
        }}
        onChangeText={(text) => setText(text)}
        placeholder="Enter your name"
      />
      <Button
        color={"red"}
        title="Increment"
        onPress={() => {
          setCount((count) => count + 1);
        }}
      />
      <Button
        title="Decrement"
        onPress={() => {
          setCount((count) => count - 1);
        }}
      />
      <Text style={{ color: "#fff" }}>
        {text.length > 0 ? "Hello " + text : "Enter Name"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",

    justifyContent: "center",
  },
  button: {
    margin: 10,
  },
});
