import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import globo from '../../assets/imgs/globo.png';
import { TextInput } from 'react-native-gesture-handler';
import vector from '../../assets/imgs/Vectors2.png'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('screen');
export default function Caduser() {
    const navigation=useNavigation();
    const [checkBox, setCheckBox] = useState('square')
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 28, fontWeight: 'bold', textDecorationLine: 'underline' }}>
                            Criar
                        </Text>
                        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                            {' '}Conta
                        </Text>
                    </View>
                    <Text style={{ fontSize: 13, fontWeight: '200' }}>
                        Viva essa Experiencia!
                    </Text>
                </View>
                <View style={{ backgroundColor: '#00726D', borderRadius: 500 }}>
                    <Image source={globo} style={{ width: 180, height: 180 }} />
                </View>
            </View>
            <View style={{top:30}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 12  }}>
                    Email
                </Text>
                <TextInput placeholder='Digite seu e-mail' style={{borderColor: '#000', borderRadius: 10, borderWidth: 1, width: 350, padding: 5, fontSize: 18, marginTop: 6 }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 12 }}>
                    Telefone
                </Text>
                <TextInput placeholder='Digite seu Telefone' inputMode='tel' style={{ borderColor: '#000', borderRadius: 10, borderWidth: 1, width: 350, padding: 5, fontSize: 18, marginTop: 6 }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 12 }}>
                    Senha
                </Text>
                <TextInput placeholder='Digite sua senha' secureTextEntry style={{ borderColor: '#000', borderRadius: 10, borderWidth: 1, width: 350, padding: 5, fontSize: 18, marginTop: 6 }} />

                <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'flex-start' }}>
                    <TouchableOpacity onPress={() => {
                        if (checkBox == 'square') {
                            setCheckBox('check-square');
                        }
                        else {
                            setCheckBox('square')
                        }
                    }}>
                        <Feather name={checkBox} size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{fontSize:15, textAlignVertical:'center', fontWeight:'bold'}}> Eu aceito os termos de condições</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: '#00726D', marginTop: 50, borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, color: '#FFF', textAlign: 'center', padding: 8 }}>
                        Cadastrar-se
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                top:54
            }}>
                <Image source={vector} style={{ width: width }} />
                <View style={{
                    top: -35,
                    flexDirection: 'row'
                }}>
                    <Text style={{ color: '#b0b0b0' }}> JÁ POSSUI UMA CONTA? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: '#FFF' }}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
