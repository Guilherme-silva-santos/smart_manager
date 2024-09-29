import { BaseLoginContainer } from "@/components/baseLoginContainer"
import { NavButton } from "@/components/navButton"
import { Button, StyleSheet, Text, View } from "react-native"

export const HomePage = () => {
    const user = "Guilherme"
    return (
    <BaseLoginContainer title="Home" heading={`${user}`}>
            <View style={styles.container}>
                <NavButton title="Listagem de Produtos" iconName="list" /> 
                <NavButton title="Caixa" iconName="money" /> 
                <NavButton title="Escanear novo produto" iconName="aspect-ratio" /> 
            </View>
        </BaseLoginContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
})