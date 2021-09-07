import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { RouteProp } from "@react-navigation/core";
import { RootStackParamList, NavigationProps } from "../navigation/app-stacks";
import Cocktail from "../services/cocktail.model";
import cocktaildbapiService from "../services/cocktaildbapi.service";

interface CocktailScreenProps extends NavigationProps {
  route: RouteProp<RootStackParamList, "Cocktail">;
}

interface CocktailSearchScreenState {
  cocktail: Cocktail;
  isLoading: boolean;
}

export default class CocktailScreen extends Component<
  CocktailScreenProps,
  CocktailSearchScreenState
> {
  state = {
    isLoading: true,
    cocktail: null,
  };

  componentDidMount() {
    const cocktailId = this.props.route.params.cocktailId;

    cocktaildbapiService
      .findCocktailById(cocktailId)
      .then((cocktail: Cocktail) => {
        // Update screen title
        this.props.navigation.setOptions({ title: cocktail.name });

        this.setState({ cocktail, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading) return <ActivityIndicator />;
    else {
      const { cocktail } = this.state;

      return (
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: cocktail.image }}></Image>
          <Text style={styles.instructionsTitle}>Instructions</Text>
          <Text style={styles.instructionsText}>{cocktail.instructions}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 15,
  },
  instructionsTitle: { fontSize: 22, marginBottom: 10 },
  instructionsText: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15,
  },
});
