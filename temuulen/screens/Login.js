import { Pressable, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React, { useState } from "react";
import { signInFunction } from "../fireBaseConfig";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toSignUp = () => {
    navigation.navigate("SignUp");
  };
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }
    setLoading(true);
    try {
      const response = await signInFunction(email, password);
      setLoading(false);
      navigation.navigate("Start");
    } catch (error) {
      setLoading(false);
      Alert.alert("Login Failed", error.message || "Unable to login. Check credentials and try again.");
      console.log(error.code, error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
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
        <Pressable onPress={handleLogin} style={styles.logcontainer}>
          <Text style={styles.logText}>Login</Text>
        </Pressable>
        <Pressable
          onPress={toSignUp}
          style={[styles.logcontainer, { backgroundColor: "#42b72a" }]}
        >
          <Text style={styles.logText}>Create new account</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

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