import React from 'react';
import {createStackNavigator,createAppContainer} from "react-navigation"
import {HomePage} from "./src/components/HomePage"
import { Chat } from './src/components/Chat';

const Navigation = createStackNavigator({Home:{screen:HomePage},
Chat:{screen:Chat}})
const App= createAppContainer(Navigation)
export default App
