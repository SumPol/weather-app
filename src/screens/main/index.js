import React from 'react';
import styles from './styles';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';
import ModalCityList from '../modalCityList';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpenCityList: false};
  }

  handleOpenModal = () => {
    console.log('Messege');
    this.setState({isOpenCityList: true});
  };

  handleCloseModal = () => {
    console.log('Messege');
    this.setState({isOpenCityList: false});
  };

  render() {
    const isDarkMode = true;

    console.log('Main', this, this.state.isOpenCityList);
    return (
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.location}
            onPress={this.handleOpenModal}>
            <Text style={styles.cityText}>Санкт-Петербург</Text>
            <Image
              style={styles.locationImage}
              source={require('../../assets/images/location_image.png')}
            />
          </TouchableOpacity>
          <Image
            style={styles.weatherImage}
            source={require('../../assets/images/cat_image.gif')}
          />
          <Text style={styles.timeText}>Сейчас</Text>
          <Text style={styles.temperatureText}>+21 С</Text>
        </View>

        <ModalCityList
          isOpenValue={this.state.isOpenCityList}
          onClose={this.handleCloseModal}
        />
      </SafeAreaView>
    );
  }
}

export default Main;
