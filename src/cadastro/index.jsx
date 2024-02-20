import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Text, View, Image, Touchable, Dimensions } from 'react-native';
import icone from '../../assets/imgs/Saly-31.png';
import user from '../../assets/imgs/usuario.png';
import empre from '../../assets/imgs/empresa.png';
import vector from '../../assets/imgs/Vectors2.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
const { width, height } = Dimensions.get('screen');
export default function Cadastro() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.LinearGradientCad} start={{ x: 2, y: -0.5 }} end={{ x: -0.5, y: 1.8 }} colors={['#68D5DC', '#68D5DC', '#FFF', '#FFF']}>
                <View style={styles.containerIconCad}>
                    <Image source={icone} />
                </View>
                <View style={styles.containerUserCad}>
                    <Text style={styles.titleCad}>
                        Selecione o seu usuário
                    </Text>
                    <Text style={styles.subTitleCad}>
                        Viva essa experiência!
                    </Text>
                </View>
                <View style={styles.containerTipUserCad}>
                    <View style={styles.containerUserIcon}>
                        <LinearGradient style={styles.linearUserCad} colors={['#003372', '#20DF7F']}>
                            <TouchableOpacity onPress={() => navigation.navigate('Caduser')}>
                                <Image source={user} />
                            </TouchableOpacity>
                        </LinearGradient>
                        <Text>Usuário</Text>
                    </View>
                    <View style={styles.containerUserIcon}>
                        <LinearGradient style={styles.linearUserCad} colors={['#003372', '#20DF7F']}>
                            <TouchableOpacity onPress={()=>navigation.navigate('CadEmp')}>
                            <Image source={empre} style={{ left: 8 }} />
                            </TouchableOpacity>
                        </LinearGradient>
                        <Text>Empresa</Text>
                    </View>
                </View>
                <View style={styles.containerFooterCad}>
                    <Image source={vector} style={{ width: width }} />
                    <View style={styles.containerTextFooterCad}>
                        <Text style={{ color: '#b0b0b0' }}> JÁ POSSUI UMA CONTA? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ color: '#FFF' }}>ENTRAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}