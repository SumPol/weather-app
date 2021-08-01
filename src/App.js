import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class App extends React.Component {
  render() {
    const isDarkMode = true;

    return (
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.content}>
          <Text style={styles.cityText}>Санкт-Петербург</Text>
          <Image
            style={styles.weatherImage}
            source={require('./assets/images/cat_image.gif')}
          />
          <Text>Сейчас</Text>
          <Text>+21 С</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherImage: {
    width: windowWidth * 0.9, 
    height: windowHeight * 0.4,
    resizeMode: 'contain',
  },
  cityText: {
    color: 'rgb(110,146,195)',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
