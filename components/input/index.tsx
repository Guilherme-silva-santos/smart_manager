import { MaterialIcons } from "@expo/vector-icons";
import { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

type PasswordInputProps = TextInputProps & {
  label?: string;
};

export const Input: FC<PasswordInputProps> = ({ label, ...rest }) => {


  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          {...rest}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingHorizontal: 8,
      minHeight: 46,
      borderRadius: 8,
      borderColor: '#000',
      borderWidth: 1,
      backgroundColor: 'white',
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      width: "90%",
      color: "white",
      fontSize: 14,
    },
    inputContainer: {
      gap: 8,
    },
    inputLabel: {
      color: 'white',
      fontSize: 14,
    },
  });
  