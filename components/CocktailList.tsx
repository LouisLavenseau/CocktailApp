import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { NavigationProps } from "../navigation/app-stacks";
import Cocktail from "../services/cocktail.model";
import CocktailItem from "./CocktailItem";

interface CocktailListProps extends NavigationProps {
  cocktails: Array<Cocktail>;
}

export default class CocktailList extends Component<CocktailListProps> {
  render() {
    if (this.props.cocktails?.length > 0)
      return (
        <FlatList<Cocktail>
          style={styles.cocktailList}
          data={this.props.cocktails}
          keyExtractor={(cocktail) => cocktail.id.toString()}
          renderItem={({ item }) => {
            return (
              <CocktailItem
                cocktail={item}
                navigation={this.props.navigation}
              />
            );
          }}
        />
      );
    else
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Nothing to drink yet!</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  cocktailList: {
    flex: 1,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
