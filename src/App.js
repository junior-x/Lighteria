import React from "react";
import { SafeAreaView, Text, View, Image, StyleSheet } from "react-native";
import ListaProdutos from "./views/ListaProdutos";
import DetalhesProduto from "./views/DetalhesProduto";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { COR_DE_FUNDO } from "./styles/styles";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="ListaProdutos">
          <Stack.Screen
            name="ListaProdutos"
            component={ListaProdutos}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetalhesProduto"
            component={DetalhesProduto}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <ListaProdutos />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_DE_FUNDO,
  },
});

export default App;
