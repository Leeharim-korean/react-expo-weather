import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = { 
    Thunderstorm: {
        iconName:"weather-lightning",
        gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
        iconName:"weather-rainy",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain: {
        iconName:"weather-rainy",
        gradient: ["#00C6FB", "#005BEA"]
    },
    Snow: {
        iconName:"weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"]
    },
    Mist: {
        iconName:"weather-fog",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Smoke: {
        iconName:"weather-hazy",
        gradient: ["#606c88", "#3f4c6b"]
    },
    Haze: {
        iconName:"weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Dust: {
        iconName:"weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Sand: {
        iconName:"weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"]
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
        gradient: ["#FF7300", "#FEF253"]
    },
    Clouds: {
        iconName:"weather-cloudy",
        gradient: ["#D7D2CC", "#304352"]
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
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>
                {weatherOptions[condition].subtitle}
                </Text>
            </View>
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
        },
        title: {
          color: "white",
          fontSize: 44,
          fontWeight: "300",
          marginBottom: 10
        },
        subtitle: {
          fontWeight: "600",
          color: "white",
          fontSize: 24
        },
        textContainer: {
          paddingHorizontal: 20,
          alignItems: "flex-start"
        }
});