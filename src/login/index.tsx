import { Text, View, Image, TextInput, TouchableOpacity, useWindowDimensions, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import background from '../../assets/imgs/background.jpg';
import gostoRibeira from '../../assets/imgs/logoDagostoserdoRibeira.png';
import logoAngatu from '../../assets/imgs/AngatuLogo.png';
import vectors from '../../assets/imgs/vectors.png';
import teste from '../../assets/imgs/backtest.png';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
const login: React.FC = ({ }) => {
  const navigation = useNavigation();
  // sempre navigation dentro do export para funcionar
  
  const GradientText: React.FC = ({colors, ...rest }) => {
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
        <ImageBackground  source={teste} style={styles.backgroundColor}>
          <LinearGradient style={styles.LinearGradient} start={{ x: 2, y: -0.5 }} end={{ x: -0.5, y: 1.8 }} colors={['#66C4F2', '#20DF7F']} />
        </ImageBackground>
        <View style={styles.containerLogin}>
          <ImageBackground source={teste} style={styles.backgroundLogin}> 
            <View style={styles.containerItens}>
              <View style={styles.containerLogoRibeira}>
                <Image source={gostoRibeira} style={styles.logoRibeira} />
              </View>
              <View style={styles.containerLogoAngatu}>
                <View style={styles.containrAngatu}>
                  <Image source={logoAngatu} style={styles.logoAngatu}/>
                  <GradientText colors={['#fff', '#fff', '#fff', '#808080', '#404040']} style={styles.textLogo}>
                    ngatu
                  </GradientText>
                </View>
                <Text style={styles.text23}>O Vale do Ribeira está aqui!</Text>
              </View>
              <View style={styles.containerTextInput}>
                <TextInput style={styles.TextInput} cursorColor={'#FFF'} placeholderTextColor={'#FFF'} placeholder='Usuário' />
                <TextInput style={styles.TextInput} cursorColor={'#FFF'} placeholderTextColor={'#FFF'} secureTextEntry placeholder='Senha' />
                <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate('BemVindo')}>
                  <Text style={styles.textoBotaoLogin}>
                    ENTRAR
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.containerRegistro}>
                <View style={{ top: 59 }} >
                  <Image source={vectors} style={{ width: width }} />
                </View>
                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={styles.text16}>NÃO POSSUI UMA CONTA?{' '}
                  </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.textRegistro}>
                      REGISTRE-SE
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('HomeTabs')}>
                  <Text style={styles.textSemConta}>OU ENTRE SEM UMA CONTA</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default login;