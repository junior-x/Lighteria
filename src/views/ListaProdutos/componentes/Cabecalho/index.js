import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { COR_DE_FUNDO, FONT_FAMILY_REGULAR, FONT_SIZE_MEDIUM, FONT_SIZE_XX_LARGE } from '../../../../styles/styles';

const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <View style={styles.containerSacola}>
          <Image
            source={require('../../../../assets/images/icone-sacola.png')}
            style={styles.imagem}
          />
        </View>
      </View>
      <View style={styles.containerDescricao}>
        <View style={styles.separador} />
        <View style={styles.containerTexto}>
          <Text style={styles.textoDescricao}>Categorias</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 6
  },
  titulo: {
    fontFamily: 'OpenSans-Bold',
    fontSize: FONT_SIZE_XX_LARGE,
  },
  containerSacola: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 30,
  },
  imagem: {
    height: 30,
    width: 30,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
    margin: 10,
  },
  containerDescricao: {
    // paddingHorizontal: 16,
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textoDescricao: {
    padding: 24,
    backgroundColor: COR_DE_FUNDO,
    color: '#A1A5AA',
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MEDIUM,
  },
});

export default Cabecalho;
