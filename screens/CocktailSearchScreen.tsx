import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationProps } from "../navigation/app-stacks";
import cocktaildbapiService from "../services/cocktaildbapi.service";
import Input from "../components/Input";
import CocktailList from "../components/CocktailList";
import Cocktail from "../services/cocktail.model";

interface CocktailSearchScreenState {
  cocktails: Array<Cocktail>;
}

export default class CocktailSearchScreen extends Component<
  NavigationProps,
  CocktailSearchScreenState
> {
  state = {
    cocktails: [],
  };

  onInput = (text: string) => {
    cocktaildbapiService
      .searchCocktailsByName(text)
      .then((cocktails: Array<Cocktail>) => {
        this.setState({ cocktails });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Enter a cocktail name"
          onSubmitEditing={this.onInput}
        />
        <CocktailList
          cocktails={this.state.cocktails}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
