
import { Pressable, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React, { useState } from "react";
import { signUpFunction } from "../fireBaseConfig";
const SignUp = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const ToLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }
    setLoading(true);
    try {
      const response = await signUpFunction(email, password);
      setLoading(false);
      Alert.alert("Success", "Account created! Redirecting to login...");
      navigation.navigate("Login");
    } catch (error) {
      setLoading(false);
      Alert.alert("Signup Failed", error.message || "Unable to create account");
      console.log(error.code, error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.rowStyle}>
          <TextInput
            onChangeText={setFirstname}
            value={firstname}
            placeholder="First name"
          />
        </View>
        <View style={styles.rowStyle}>
          <TextInput
            onChangeText={setLastname}
            value={lastname}
            placeholder="Last name"
          />
        </View>
        <View style={styles.rowStyle}>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
        </View>
        <View style={styles.rowStyle}>
          <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
          />
        </View>

        <Pressable
          onPress={ToLogin}
          style={[styles.logcontainer, { backgroundColor: "#42b72a" }]}
        >
          <Text style={styles.logText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    padding: 15,
  },
  innerContainer: {
    backgroundColor: "white",
    width: "80%",
    gap: 20,
    padding: 20,
    borderRadius: 5,
  },
  rowStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#e0e0e0",
  },
  logcontainer: {
    borderRadius: 10,
    borderColor: "#e0e0e0",
    alignItems: "center",
    backgroundColor: "#0866ff",
    padding: 10,
  },
  logText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
