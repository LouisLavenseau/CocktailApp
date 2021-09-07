import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationProps } from "../navigation/app-stacks";
import cocktaildbapiService from "../services/cocktaildbapi.service";
import Input from "../components/Input";
import CocktaiList from "../components/CocktailList";
import Cocktail from "../services/cocktail.model";

interface IngredientSearchScreenState {
  cocktails: Array<Cocktail>;
}

export default class IngredientSearchScreen extends Component<
  NavigationProps,
  IngredientSearchScreenState
> {
  state = {
    cocktails: [],
  };

  onInput = (text: string) => {
    cocktaildbapiService
      .searchCocktailsByIngredientName(text)
      .then((cocktails: Array<Cocktail>) => {
        this.setState({ cocktails });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Enter a ingredient name"
          onSubmitEditing={this.onInput}
        />
        <CocktaiList
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
