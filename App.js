import React, { Component } from "react";
import { Spinner, Header, Container } from "native-base";

// Components
import Index from "./Navigation/index";
import { NavigationContainer } from "@react-navigation/native";
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Header />
        <Index />
      </NavigationContainer>
    );
  }
}
