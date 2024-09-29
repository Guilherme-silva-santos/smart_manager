import { FC } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type IconNames = keyof typeof MaterialIcons.glyphMap;

type ButtonProps = TouchableOpacityProps & {
  text: string;
  variant?: "delete" | "default" | "secondary";
  isLoading?: boolean;
  leftIcon?: IconNames;
  rightIcon?: IconNames;
};

export const Button: FC<ButtonProps> = ({
  text,
  variant = "default",
  leftIcon,
  isLoading,
  rightIcon,
  ...rest
}) => {
  let buttonColor;
  let buttonTextColor;

  switch (variant) {
    case "default":
      buttonColor = 'white';
      buttonTextColor = 'white';
      break;
    case "delete":
      buttonColor = 'red';
      buttonTextColor = 'white';
      break;
    case "secondary":
      buttonColor = 'white';
      buttonTextColor = 'blue';
    default:
      break;
  }
    return (
        <TouchableOpacity
            {...rest}
            activeOpacity={0.8}
            disabled={isLoading}
            style={[styles.container, { backgroundColor: 'black' }]}
        >
            {!isLoading ? (
                <>
                    {leftIcon && (
                        <MaterialIcons size={18} color={'white'} name={leftIcon} />
                    )}
                    <Text style={[styles.text, { color: 'white' }]}>{text}</Text>
                    {rightIcon && (
                        <MaterialIcons size={18} color={'white'} name={rightIcon} />
                    )}
                </>

            ) : (
                <ActivityIndicator color={'white'} />
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 12,
        paddingHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100000,
        flexDirection: "row",
        gap: 16,
    },
    text: {
        fontSize: 16,
        textTransform: "capitalize",
    },
});
