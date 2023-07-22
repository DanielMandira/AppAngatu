import {Text, View, Image, ImageBackground, TextInput, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import background from '../../assets/imgs/background.jpg';
import logoAngatu from '../../assets/imgs/AngatuLogo.png';
import {styles} from './styles';
import caicaras from '../../assets/imgs/Caicaras.png'
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('window')
export default function BemVindo() {
    setTimeout(()=>{
        navigation.navigate('Home')}, 5000)
  // sempre navigation dentro do export para funcionar
  const navigation = useNavigation();
  const GradientText = ({ colors, ...rest }) => {
    return (
      <MaskedView maskElement={<Text {...rest} />}>
        <LinearGradient colors={colors} >
          <Text {...rest} style={[rest.style, { opacity: 0 }]} />
        </LinearGradient>
      </MaskedView>
    );
  };
  return (
    <View style={styles.container} >
      <ImageBackground source={background} style={styles.background}>
        <ImageBackground style={styles.backgroundColor}>
          <LinearGradient style={styles.LinearGradient} start={{ x: 2, y: -0.5 }} end={{ x: -0.5, y: 1.8 }} colors={['#66C4F2','#20DF7F' ]}/>
        </ImageBackground>
        <View style={styles.containerLogin}>
          <ImageBackground style={styles.backgroundLogin}>
            <View style={styles.containerItens}>
                <View style={{flexDirection:'row', justifyContent:'center', top:-280}}>
                    <Text style={{color:'#fff', fontSize:18, fontWeight:'bold'}}>Versão BETA</Text>
                </View>
              <View style={styles.containerLogoAngatu}>
                <View style={styles.containrAngatu}>
                  <Image source={logoAngatu} style={styles.logoAngatu}>
                  </Image>
                  <GradientText colors={['#fff', '#fff', '#fff', '#fff', '#808080', '#000']} style={styles.textLogo}>
                    ngatu
                  </GradientText>
                </View>
                <Text style={styles.text23}>O Vale do Ribeira está aqui!</Text>
              </View>
              <View style={styles.containerTextInput}>
                <Text style={{fontSize:29, flexWrap:'wrap', color:'#FFF', textAlign:'center', fontWeight:'bold', justifyContent:'center', alignItems:'center'}}>
                    Bem Vindo de Volta, Aventureira Amanda!
                </Text>
              </View>
              <View style={{flexDirection:'row', justifyContent:'center', top:180}}>
                <Image source={caicaras}/>
                <Text style={{color:'#fff', fontSize:18, fontWeight:'bold'}}> {' '}Caiçaras Copyrigth</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}

