import { BaseLoginContainer } from "@/components/baseLoginContainer"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { LinkButton } from "@/components/linkButton"
import { PasswordInput } from "@/components/passawordInput"
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native"

export const SignUpScreen = () => {
    return (
        <BaseLoginContainer title="Cadastrar" heading="Bem-vindo ao Smart Manager!">
            <ScrollView>
            <KeyboardAvoidingView style={styles.container} >
                <Input label="Nome*" placeholder="Digite aqui seu nome..." />
                <Input label="Email*" placeholder="Digite aqui seu email..." />
                <PasswordInput label="Senha*" placeholder="Digite aqui sua senha..." />
                <PasswordInput label="Confirmar Senha*" placeholder="Digite aqui sua senha..." />
                <LinkButton text="Esqueci minha senha" style={{ display: "flex", alignItems: "flex-end" }} />
                <Button text="Entrar" variant="default" />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ textAlign: "center" }}>Já possui uma conta, </Text>
                    <LinkButton text="clique aqui!" onPress={() => { }} />
                </View>
            </KeyboardAvoidingView>
            </ScrollView>
        </BaseLoginContainer>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 16,
    }
});
