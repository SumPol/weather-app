import React from 'react';
import styles from './styles';
import {
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

class ModalCityList extends React.Component {
  renderCity = (element, index) => {
    return (
      <TouchableOpacity key={index} style={styles.cityText}>
        <Text style={styles.cityText}>{element}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const isDarkMode = true;
    const cities = ['CG', 'VB', 'NU'];

    return (
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <View style={styles.content}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>Выберите город</Text>
            <Image
              style={styles.crossImage}
              source={require('../../assets/images/cross_image.png')}
            />
          </View>
          {cities.map(this.renderCity)}
        </View>
      </SafeAreaView>
    );
  }
}

export default ModalCityList;
