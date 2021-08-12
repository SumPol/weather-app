import React from 'react';
import styles from './styles';
import colors from '../../assets/colorThemes';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
  View,
  Alert,
} from 'react-native';
import ModalCityList from '../modalCityList';
import {currentWeather} from '../../api/weather';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenCityList: false,
      temperature: '',
      currentCityObject: {},
    };
    this.getWeather();
  }

  getWeather = async () => {
    try {
      const res = await currentWeather({city: 'London'});
      this.setState({temperature: res.main.temp});
    } catch (error) {
      console.error(error);
      Alert.alert('Сервер временно недоступен 😞');
    }
  };

  handleOpenModal = () => {
    this.setState({isOpenCityList: true});
  };

  handleCloseModal = () => {
    this.setState({isOpenCityList: false});
  };

  setCurrentCityObject = element => {
    this.setState({currentCityObject: element});
    this.handleCloseModal();
  };

  render() {
    const isDarkMode = true;

    //console.log('Main', this, this.state);
    return (
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.location}
            onPress={this.handleOpenModal}>
            <Text style={styles.cityText}>
              {!this.state.currentCityObject.city
                ? 'Выберите город'
                : this.state.currentCityObject.city}
            </Text>
            <Image
              style={styles.locationImage}
              source={require('../../assets/images/location_image.png')}
            />
          </TouchableOpacity>
          <Image
            style={styles.weatherImage}
            source={require('../../assets/images/cat_image.gif')}
          />
          {this.state.temperature !== '' ? (
            <>
              <Text style={styles.timeText}>Сейчас</Text>
              <Text style={styles.temperatureText}>
                {this.state.temperature} ℃
              </Text>
            </>
          ) : (
            <ActivityIndicator size="large" color={colors.main} />
          )}
        </View>

        <ModalCityList
          isOpenValue={this.state.isOpenCityList}
          onClose={this.handleCloseModal}
          onPressCity={this.setCurrentCityObject}
        />
      </SafeAreaView>
    );
  }
}

export default Main;
