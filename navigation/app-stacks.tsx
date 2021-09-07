import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from "@react-navigation/stack";
import IngredientSearchScreen from "../screens/IngredientSearchScreen";
import CocktailScreen from "../screens/CocktailScreen";
import CocktailSearchScreen from "../screens/CocktailSearchScreen";

// Define view (screen) names and associated params
// Enables type checking and code completion for views
// undefined = no params passed to view
export type RootStackParamList = {
  Cocktails: undefined;
  Ingredients: undefined;
  Cocktail: { cocktailId: number };
};

// Base interface for all components using the navigation object
// Enables type checking and code completion for navigation
// Should be inherited to add component-specific props
export interface NavigationProps {
  navigation: StackNavigationProp<RootStackParamList, any>;
}

const stackScreenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: "#a700a7",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitleAlign: "center",
};

const CocktailsStack = createStackNavigator<RootStackParamList>();
export const CocktailsStackScreen = () => {
  return (
    <CocktailsStack.Navigator screenOptions={stackScreenOptions}>
      <CocktailsStack.Screen
        name="Cocktails"
        options={{ title: "Cocktails" }}
        component={CocktailSearchScreen}
      />
      <CocktailsStack.Screen name="Cocktail" component={CocktailScreen} />
    </CocktailsStack.Navigator>
  );
};

const IngredientsStack = createStackNavigator<RootStackParamList>();
export const IngredientsStackScreen = () => {
  return (
    <IngredientsStack.Navigator screenOptions={stackScreenOptions}>
      <IngredientsStack.Screen
        name="Ingredients"
        options={{ title: "Ingrédients" }}
        component={IngredientSearchScreen}
      />
      <IngredientsStack.Screen name="Cocktail" component={CocktailScreen} />
    </IngredientsStack.Navigator>
  );
};
