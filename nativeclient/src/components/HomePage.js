import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Image, Input, Divider, Icon } from "react-native-elements";
import { imageChange, nameChange } from "../redux/actions.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  imgbox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#fff"
  }
});

class _HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      imageArr: [
        "https://res.cloudinary.com/dohakifo0/image/upload/v1552073673/lab-profile-app/fmrij.jpg",
        "https://res.cloudinary.com/dohakifo0/image/upload/v1552092167/lab-profile-app/fuigs.jpg",
        "https://res.cloudinary.com/dohakifo0/image/upload/v1552092065/lab-profile-app/njnrq.jpg",
        "https://res.cloudinary.com/dohakifo0/image/upload/v1552119536/lab-profile-app/bdbdi.jpg"
      ],
      text: ""
    };
  }

  imgChange = index => {
    const { dispatch } = this.props;
    const { imageArr } = this.state;
    dispatch(imageChange(imageArr[index]));
  };

  textHandler(event) {
    const { text } = event.nativeEvent;
    this.setState({ text });
  }

  submit() {
    const { text } = this.state;
    const { dispatch } = this.props;
    dispatch(nameChange(text));
  }

  render() {
    const { name } = this.props;
    const { navigate } = this.props.navigation;
    const { imageArr, text } = this.state;
    return (
      <View style={styles.container}>
        <Text>{name}</Text>
        <Input
          value={text}
          onChange={e => this.textHandler(e)}
          onSubmitEditing={() => this.submit()}
          placeholder="INTRUDUCE YOUR NAME"
          rightIcon={<Icon name="input" size={24} color="black" />}
        />
        <Divider style={styles.imgbox}>
          {imageArr.map((e, i) => (
            <TouchableOpacity key={i} onPress={() => this.imgChange(i)}>
              <Image
                source={{ uri: e }}
                key={i}
                style={{
                  width: 100,
                  height: 100,
                  borderWidth: 2,
                  borderColor: this.props.img === e ? "blue" : "black"
                }}
              />
            </TouchableOpacity>
          ))}
        </Divider>
        <Button
          title="see the chat"
          onPress={() => {
            navigate("Chat", {});
          }}
        />
      </View>
    );
  }
}
export const HomePage = connect(store => ({
  img: store.img,
  name: store.name
}))(_HomePage);
