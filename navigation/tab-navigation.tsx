import React from "react";
import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  RootStackParamList,
  CocktailsStackScreen,
  IngredientsStackScreen,
} from "./app-stacks";

const getTabBarIcon = (
  route: { name: string },
  focused: boolean,
  color: string
) => {
  const icons = {
    Cocktails: "ios-wine",
    Ingredients: "ios-menu",
  };
  return (
    <Ionicons name={icons[route.name] || "ios-menu"} size={25} color={color} />
  );
};

const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: "tomato",
  inactiveTintColor: "gray",
  labelStyle: {
    fontSize: 14,
  },
};

const Tab = createBottomTabNavigator<RootStackParamList>();
export const TabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) =>
          getTabBarIcon(route, focused, color),
      })}
    >
      <Tab.Screen name="Cocktails" component={CocktailsStackScreen} />
      <Tab.Screen name="Ingredients" component={IngredientsStackScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
