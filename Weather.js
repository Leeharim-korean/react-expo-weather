import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = { 
    Thunderstorm: {
        iconName:"weather-lightning",
        gradient: ["#2C5364", "#203A43", "#0F2027"]
    },
    Drizzle: {
        iconName:"weather-rainy",
        gradient: ["#6dd5ed", "#2193b0"]
    },
    Rain: {
        iconName:"weather-rainy",
        gradient: ["#2980b9", "#2c3e50"]
    },
    Snow: {
        iconName:"weather-snowy",
        gradient: ["#eef2f3", "#8e9eab"]
    },
    Mist: {
        iconName:"weather-fog",
        gradient: ["#2a5298", "#1e3c72"]
    },
    Smoke: {
        iconName:"weather-hazy",
        gradient: ["#606c88", "#3f4c6b"]
    },
    Haze: {
        iconName:"weather-hazy",
        gradient: ["#B993D6", "#8CA6DB"]
    },
    Dust: {
        iconName:"weather-hazy",
        gradient: ["#ACBB78", "#F7F8F8"]
    },
    Sand: {
        iconName:"weather-hazy",
        gradient: ["#ACBB78", "#F7F8F8"]
    },
    Ash: {
        iconName:"weather-fog",
        gradient: ["#606c88", "#3f4c6b"]
    },
    Squall: {
        iconName:"weather-fog",
        gradient: ["#2a5298", "#1e3c72"]
    },
    Tornado: {
        iconName:"weather-tornado",
        gradient: ["#243B55", "#141E30"]
    },
    Clear: {
        iconName:"weather-sunny",
        gradient: ["#FDC830", "#F37335"]
    },
    Clouds: {
        iconName:"weather-cloudy",
        gradient: ["#E0EAFC", "#CFDEF3"]
    }
  };
  
  export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient} 
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer} />
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
        },
        temp: {
            fontSize: 42,
            color: "white"
        },
        halfContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }
});