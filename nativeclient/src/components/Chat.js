import React from "React";
import { Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import io from "socket.io-client";
import axios from "axios";
import { Input, Icon, ListItem } from "react-native-elements";

class _Chat extends React.Component {
  constructor() {
    super();
    this.instance = axios.create({
      baseURL: "http://bc3d6ff1.ngrok.io/",
      timeout: 2000,
      withCredentials: true
    });
    this.socket = io("http://bc3d6ff1.ngrok.io/");
    this.state = { messages: [], text: "" };
  }

  componentDidMount() {
    this.socket.on("connect", () => {
      this.socket.on("message", msg => {
        this.setState({ messages: [...this.state.messages, msg] });
      });
    });
  }

  textHandler(event) {
    const { text } = event.nativeEvent;
    this.setState({ text });
  }

  submit() {
    const { text } = this.state;
    const { img, name } = this.props;
    const msg = { img, name, text };
    this.socket.emit("messages", msg);
    this.setState({ text: "" });
  }

  render() {
    const { messages, text } = this.state;
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <ScrollView
          ref={ref => (this.scrollView = ref)}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.scrollView.scrollToEnd({ animated: true });
          }}
        >
          {messages.map(({ name, img, text }, i) => (
            <View key={i}>
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: img } }}
                title={name}
              />
              <Text>{text}</Text>
            </View>
          ))}
        </ScrollView>
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
