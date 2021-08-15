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
import ModalCityScreen from '../modalCityScreen';
import * as api from '../../api/weather';

/** Главный экран */
class MainScreen extends React.Component {
  /** Вызывается 1 раз в моент создания компонента Main - главвного экрана */
  constructor(props) {
    super(props);
    this.state = {
      isOpenCityList: false,
      temperature: '',
      currentCityObject: {},
      weatherObject: {},
    };
    //this.getWeather();
  }

  /** Получить текущую температуру в городе, сохранить ее в state */
  getWeather = async cityObject => {
    console.log('getWeather', cityObject);
    try {
      const lat = cityObject.geo_lat;
      const lon = cityObject.geo_lon;
      const arg = {lat, lon};

      const res = await api.currentWeather(arg);
      console.log('getWeather res', res);

      this.setState({
        weatherObject: {
          clouds: res.clouds,
          main: res.main,
          rain: res.rain || {},
          weather: res.weather,
          wind: res.wind,
          snow: res.snow || {},
        },
      });
    } catch (error) {
      console.error(error);
      Alert.alert('Сервер временно недоступен 😞');
    }
  };

  /** Открыть модальное окно */
  handleOpenModal = () => {
    this.setState({isOpenCityList: true});
  };

  /** Закрыть модальное окно */
  handleCloseModal = () => {
    this.setState({isOpenCityList: false});
  };

  /** Сохранить в state выбранный город и сделать запрос на погоду в этом городе */
  setCurrentCityObject = cityObject => {
    this.setState({currentCityObject: cityObject});
    this.getWeather(cityObject);
    this.handleCloseModal();
  };

  render() {
    const isDarkMode = true;

    console.log('Main', this, this.state);
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
          {this.state.weatherObject?.main ? (
            <>
              <Text style={styles.timeText}>Сейчас</Text>
              <Text style={styles.temperatureText}>
                {this.state.weatherObject.main.temp} ℃
              </Text>
            </>
          ) : (
            <ActivityIndicator size="large" color={colors.main} />
          )}
        </View>

        <ModalCityScreen
          isOpenValue={this.state.isOpenCityList}
          onClose={this.handleCloseModal}
          onPressCity={this.setCurrentCityObject}
        />
      </SafeAreaView>
    );
  }
}

export default MainScreen;
