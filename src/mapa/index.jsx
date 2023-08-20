import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export default function Maps() {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text>TESTE Mapa</Text>
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