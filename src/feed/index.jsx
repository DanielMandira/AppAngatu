import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export default function Feed() {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text>TESTE Feed</Text>
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