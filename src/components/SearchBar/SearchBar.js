import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { Container, IconContainer, Input } from "./SearchBarStyle";
import { EvilIcons } from "@expo/vector-icons";

export default class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Input
          placeholder="Search"
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onSubmit}
          autoCorrect={false}
          autoComplete="none"
          value={this.props.value}
        />
        <IconContainer onPress={this.props.onSubmit}>
          <EvilIcons name="search" size={30} color="black" />
        </IconContainer>
      </Container>
    );
  }
}
