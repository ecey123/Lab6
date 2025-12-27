import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>My Profile App</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <ProfileCard
            name="Ada Lovelace"
            role="Mathematician"
            imageSource={require('./assets/ada.jpg')}
          />

          <ProfileCard
            name="Grace Hopper"
            role="Computer Scientist"
            imageSource={require('./assets/grace.jpg')}
          />

          <ProfileCard
            name="Hedy Lamarr"
            role="Inventor"
            imageSource={require('./assets/hedy.jpg')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
