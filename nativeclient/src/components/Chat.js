import React from "React";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import io from "socket.io-client";
import axios from "axios";
import { Input, Icon } from "react-native-elements";

class _Chat extends React.Component {
  constructor() {
    super();
    this.instance = axios.create({
      baseURL: "http://720ab39b.ngrok.io/",
      timeout: 2000,
      withCredentials: true
    });
    this.socket = io("http://720ab39b.ngrok.io/");
    this.state = { messages: ["Welcome"], text: "" };
  }

  componentDidMount() {
    this.socket.on("connect", () => {
      console.log("connected");
      this.socket.on("message", text => {
        console.log(text);
        this.setState({ messages: [...this.state.messages, text] });
      });
    });
  }

  textHandler(event) {
    const { text } = event.nativeEvent;
    this.setState({ text });
  }

  submit() {
    const { text } = this.state;
    this.socket.emit("messages", text);
    this.setState({ text: "" });
  }

  render() {
    const { messages, text } = this.state;
    return (
      <View>
        {messages.map((e, i) => (
          <Text key={i}>{e}</Text>
        ))}
        <Input
          value={text}
          onChange={e => this.textHandler(e)}
          onSubmitEditing={() => this.submit()}
          placeholder="Message here"
          rightIcon={<Icon name="input" size={24} color="black" />}
        />
      </View>
    );
  }
}
export const Chat = connect(store => ({ img: store.img, name: store.name }))(
  _Chat
);
