import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export const HomePage = props => {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <Text>Prueba</Text>
      <TextInput value="hola" editable={true} />
      <Image
        source={{
          uri:
            "https://cdn.pixabay.com/user/2015/01/20/20-56-42-330_250x250.jpg"
        }}
        style={{ width: 500, height: 500 }}
      />
      <Button
        title="see the chat"
        onPress={() => {
          navigate("Chat", {});
        }}
      />
    </View>
  );
};
