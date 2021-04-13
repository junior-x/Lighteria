import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Cabecalho = () => {
    return (
        <>
        <View style={styles.containerTitulo}>
            <Text style={styles.titulo}>Lighteria</Text>
            <View style={styles.containerSacola}>
                <Image source={require("../../../../assets/images/icone-sacola.png")} style={styles.imagem}/>
            </View>
        </View>

        <View>
            <View style={styles.containerDescricao}>
                <View style={styles.separador}>
                </View>
                <View style={styles.containerTexto}>
                    <Text style={styles.textoDescricao}>Categorias</Text>
                </View>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    imagem: {
        height: 30,
        width: 30,
    },

    titulo: {
       fontFamily: "OpenSans-ExtraBold",
       fontSize: 28, 
    },

    containerTitulo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
        padding: 30,

    },
    containerSacola: {
        backgroundColor: "#ffffff",
        padding: 18,
        borderRadius: 30,
    },

    containerDescricao: {
        paddingHorizontal: 24,

    },

    separador: {
        borderWidth: 0.5,
        borderColor: "#A1A5AA",
    },

    containerTexto: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: -46,
    },

    textoDescricao: {
        padding: 34,
        backgroundColor: "#FAFAFA",
        fontSize: 16,
        fontFamily: "OpenSans-Regular",
        color: "#A1A5AA"

    },

})

export default Cabecalho;