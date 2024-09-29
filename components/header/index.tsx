import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HeaderProps = {
    heading: string
}
export const Header = ({ heading }: HeaderProps) => {
    const {canGoBack, back} = router;

    return (
        <View style={styles.contentHeader}>
        { canGoBack() && (
            <TouchableOpacity onPress={back}>
                <MaterialIcons name="arrow-back-ios" color={'white'} size={18} />
            </TouchableOpacity>
        )}
        <Text style={styles.contentTitle}>Seja Bem-Vindo usuário!</Text>
        {canGoBack() && <View/>}
      </View>
    );
}

const styles = StyleSheet.create({
    contentHeader: {
        backgroundColor: '#363636',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8, 
        padding: 20,
        borderRadius: 8,
        justifyContent: 'space-between',
    },

    contentTitle:{
        fontSize: 18,
        color: 'white',
    },
})