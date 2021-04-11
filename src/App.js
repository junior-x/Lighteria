import React  from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ListaProdutos from "./views/ListaProdutos";


const App = () => {
    return(
        <SafeAreaView style={styles.container}>
                
            <ListaProdutos/>

        </SafeAreaView>    
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: "#FAFAFA",
    },
})

export default App;