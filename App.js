import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [output, setOutput] = useState("what up bitch!");
  return (
    <View style={styles.container}>
      <Text>{output}</Text>
      <Button
        title="click me bitch!"
        onPress={() => {
          if (output === "what up bitch!") {
            setOutput("still here bitch?");
          } else {
            setOutput("what up bitch!");
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
