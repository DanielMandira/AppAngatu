import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import perfil from '../../assets/imgs/Perfil.jpeg';
import headerBack from '../../assets/imgs/HeaderBack.jpg';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('screen')
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ width: width, height: 150 }}>
        <ImageBackground source={headerBack} style={{ height: '100%', width: width }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ top: 25, left: 15, flexDirection: 'row', alignItems: 'center' }}>
              <Image source={perfil} style={{ width: 145, height: 145, borderRadius: 100, }} />
              <FontAwesome5 name="canadian-maple-leaf" size={24} color="red" />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', padding: 5 }}>
              <Text style={{ fontSize: 20 }}>Amanda Castro</Text>
              <Text>Aventureira</Text>
            </View>
            <View >
              <FontAwesome5 name="exclamation-circle" size={24} color="#F0B622" />
            </View>
          </View>
        </ImageBackground>
        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', marginTop: 15 }}>
          <TextInput style={{
            padding: 5, shadowColor: '#000', shadowOffset: {
              width: 50, height: 50
            }, shadowOpacity: 100, shadowRadius: 5, borderColor: '#CCC', borderWidth: 0.5, borderRadius: 100, width: 200
          }} placeholder='Bem-Vinda, Aventureira!' />
          <FontAwesome5 name="search" size={24} left={-38} color='orange' />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 15 }}>
          <View>
            <View style={{ backgroundColor: '#CCC', borderRadius: 100, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <FontAwesome5 size={24} name='running' />
            </View>
            <Text>Corrida</Text>
          </View>

          <View>
            <View style={{ backgroundColor: '#CCC', borderRadius: 100, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <FontAwesome5 size={24} name='think-peaks' />
            </View>
            <Text>Aventura</Text>
          </View>

          <View>
            <View style={{ backgroundColor: '#CCC', borderRadius: 100, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <FontAwesome5 size={24} name='theater-masks' />
            </View>
            <Text>Cultura</Text>
          </View>

          <View>
            <View style={{ backgroundColor: '#CCC', borderRadius: 100, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <MaterialIcons name="backpack" size={24} />
            </View>
            <Text>Planejar</Text>
          </View>
        </View>
        <View style={{}}>
          <View>
          <Text>Populares</Text>
          <ScrollView showsHorizontalScrollIndicator horizontal>
          <View style={{flexDirection:'row'}}>
            <Image source={headerBack} size={150}/>
            <Image source={headerBack} size={150}/>
          </View>
            </ScrollView>
          </View>
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
    height:height
  },
});