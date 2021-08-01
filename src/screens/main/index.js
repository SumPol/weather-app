import React from 'react';
import styles from './styles';
import {SafeAreaView, StatusBar, Text, Image, View} from 'react-native';

class Main extends React.Component {
  render() {
    const isDarkMode = true;

    return (
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.content}>
          <View style={styles.location}>
            <Text style={styles.cityText}>Санкт-Петербург</Text>
            <Image
              style={styles.locationImage}
              source={require('../../assets/images/location_image.png')}
            />
          </View>
          <Image
            style={styles.weatherImage}
            source={require('../../assets/images/cat_image.gif')}
          />
          <Text style={styles.timeText}>Сейчас</Text>
          <Text style={styles.temperatureText}>+21 С</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Main;
