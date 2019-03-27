import React from 'react';
import {createStackNavigator,createAppContainer} from "react-navigation"
import {HomePage} from "./HomePage"
import { Chat } from './Chat';


const Navigate = createStackNavigator({
  Home: { screen: HomePage },
  Chat: { screen: Chat }
});

const Nav = createAppContainer(Navigate)
export const Navigation = () => <Nav></Nav>
