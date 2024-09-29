import { MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type IconNames = keyof typeof MaterialIcons.glyphMap;

type NavButtonProps = TouchableOpacityProps & {
  title: string;
  iconName?: IconNames;
};


export const NavButton: FC<NavButtonProps> = ({ title, iconName, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest} style={styles.container}>
      <View style={styles.iconContainer}>
        {iconName && (
          <MaterialIcons size={18} name={iconName} color={'white'} />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <MaterialIcons
        size={18}
        name={"arrow-forward-ios"}
        color={'gray'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1C",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    justifyContent: "space-between",
  },
  iconContainer: {
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: "white",
  },
});
