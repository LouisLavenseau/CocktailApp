import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationProps } from "../navigation/app-stacks";
import Cocktail from "../services/cocktail.model";

interface CocktailItemProps extends NavigationProps {
  cocktail: Cocktail;
}

export default class CocktailItem extends Component<CocktailItemProps> {
  render() {
    const { cocktail, navigation } = this.props;
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            navigation.navigate("Cocktail", {
              cocktailId: cocktail.id,
            });
          }}
        >
          <Image style={styles.image} source={{ uri: cocktail.thumbnail }} />
          <Text style={styles.text}>{cocktail.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  image: { height: 75, width: 75 },
});
