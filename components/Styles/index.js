//Estilos do app

import { StyleSheet , Dimensions} from 'react-native';

//Estilizacao da tela
const { height } = Dimensions.get('window');
 
const box_count = 10;
const box_height = height / box_count;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: box_height,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxImpar: {
    backgroundColor: '#2196F3',
  },
  boxPar: {    
    //backgroundColor: '#8BC34A'
  },
  detail: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 30,
    color: '#8b0000', //darkred
  },
  detTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detBody: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default style;