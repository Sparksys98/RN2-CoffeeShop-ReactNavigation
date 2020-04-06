import React, { Component } from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";
import { Icon } from "native-base";
const { Navigator, Screen } = createStackNavigator();

export default function Index() {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={
        ({
          headerTintColor: "White",
          headerStyle: { backgroundColor: "rgb(20,90,100)" },
        },
        { headerTitleStyle: { fontWeight: "bold" } })
      }
    >
      <Screen name="Login" component={Login} />
      <Screen name="Signup" component={Signup} />
      <Screen
        name="CoffeeList"
        component={CoffeeList}
        options={({ navigation, route }) => ({
          title: route.params.coffeeshop.name,
          headerRight: () => (
            <Icon
              name="md-cart"
              onPress={() => {
                navigation.navigate("CoffeeCart");
              }}
            />
          ),
        })}
      />
      <Screen name="CoffeeDetail" component={CoffeeDetail} />
      <Screen name="CoffeeCart" component={CoffeeCart} />
    </Navigator>
  );
}
