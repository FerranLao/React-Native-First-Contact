import React from "React";
import { Text, View, TextInput } from "react-native";
import io from "socket.io-client";
import axios from "axios";

export class Chat extends React.Component {
  constructor() {
    super();
    this.instance = axios.create({
      baseURL: "http://720ab39b.ngrok.io/",
      timeout: 2000,
      withCredentials:true
    });
    this.socket = io("http://720ab39b.ngrok.io/");
    this.state = { messages: ["hola"], text: "" };
  }

  componentDidMount() {
    const { messages } = this.state;
    this.socket.on("connection", () => {
      console.log("connected")
      this.socket.on("messages", text => {
        messages.push(text)
        this.setState({messages})
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
        
        <TextInput
          value={text}
          onChange={e => this.textHandler(e)}
          onSubmitEditing={() => this.submit()}
        />
      </View>
    );
  }
}