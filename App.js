import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = { 
    isLoading: true
  };
  getLoctaion = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("GPS turns off", "Can't find you");
    }
  };
  componentDidMount() {
    this.getLoctaion();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading/> : null;
  }
}