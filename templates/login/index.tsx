import { BaseLoginContainer } from "@/components/baseLoginContainer"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { LinkButton } from "@/components/linkButton"
import { PasswordInput } from "@/components/passawordInput"
import { router } from "expo-router"
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native"

export const Login = () => {
    const handleSignUp = () => {
        router.navigate("/signup");
      };
    const handleSignIn = () => {
        router.push("/home");
    }    

    return (
        <BaseLoginContainer title="Entrar" heading="Bem-vindo ao Smart Manager!">
            <KeyboardAvoidingView style={styles.container} >
                <Input label="Email*" placeholder="Digite aqui seu email..." />
                <PasswordInput label="Senha*" placeholder="Digite aqui sua senha..." />
                <LinkButton text="Esqueci minha senha" style={{ display: "flex", alignItems: "flex-end" }} />
                <Button onPress={handleSignIn} text="Entrar" variant="default"  />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ textAlign: "center" }}>Se não possui uma conta, </Text>
                    <LinkButton text="clique aqui!" onPress={handleSignUp} />
                </View>
            </KeyboardAvoidingView>
        </BaseLoginContainer>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 16,
    }
});
