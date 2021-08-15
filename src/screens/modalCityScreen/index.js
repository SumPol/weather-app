import React from 'react';
import styles from './styles';
import colors from '../../assets/colorThemes';
import {getCityList} from '../../api/weather';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Modal,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';

/** Модальный экран со списком городов */
class ModalCityScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityObjects: [],
      searchString: '',
    };
  }

  /** Поиск городов по вхождению строки, сохранение списка найденных городов в state */
  searchCity = textCity => {
    const cities = getCityList({searchString: textCity});
    if (textCity.replace(/\s+/g, '').length > 1) {
      this.setState({cityObjects: cities, searchString: textCity});
    } else {
      this.setState({cityObjects: [], searchString: ''});
    }
  };

  /** Вывести строку с информацией о городе (город, тип региона, регион) */
  renderCity = cityObject => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPressCity(cityObject);
        }}
        key={cityObject.city + cityObject.region}
        style={styles.cityText}>
        <Text numberOfLines={1} style={styles.cityText}>
          {cityObject.city}{' '}
          <Text
            ellipsizeMode={'tail'}
            numberOfLines={1}
            style={styles.regionText}>
            {cityObject.region_type} {cityObject.region}
          </Text>
        </Text>
      </TouchableOpacity>
    );
  };

  /** Закрыть модальное окно и очистить в state список городов */
  closeModal = () => {
    const onClose = this.props.onClose;
    onClose();
    this.setState({cityObjects: []});
  };

  render() {
    const {isOpenValue = false} = this.props;
    const {cityObjects, searchString} = this.state;
    const isDarkMode = true;

    //console.log(this.state);
    return (
      <Modal animationType="slide" visible={isOpenValue}>
        <SafeAreaView style={styles.backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

          <View style={styles.content}>
            <View style={styles.headerView}>
              <Image
                style={styles.searchImage}
                source={require('../../assets/images/search_image.png')}
              />
              <TextInput
                style={styles.input}
                onChangeText={this.searchCity}
                placeholder="Выберите город"
                keyboardType="default"
                autoFocus={true}
                placeholderTextColor={colors.placeholder}
                returnKeyType="search"
              />
              <TouchableOpacity
                style={styles.crossButton}
                onPress={this.closeModal}>
                <Image
                  style={styles.crossImage}
                  source={require('../../assets/images/cross_image.png')}
                />
              </TouchableOpacity>
            </View>
            {searchString.length === 0 ? (
              <Text style={styles.messageText}>
                Для поиска введите 2 символа
              </Text>
            ) : cityObjects.length === 0 && searchString.length > 1 ? (
              <Text style={styles.messageText}>
                По вашему запросу ничего не найдено
              </Text>
            ) : (
              <ScrollView style={styles.scrollView}>
                {this.state.cityObjects.map(this.renderCity)}
              </ScrollView>
            )}
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}

export default ModalCityScreen;
