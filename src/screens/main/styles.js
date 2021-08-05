import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../assets/colorThemes';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
  },
  location: {
    flexDirection: 'row',
  },
  locationImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  weatherImage: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.4,
    resizeMode: 'contain',
  },
  cityText: {
    color: colors.main,
    fontSize: 30,
    fontWeight: 'bold',
  },
  timeText: {
    color: colors.main,
    fontSize: 25,
    marginBottom: 10,
  },
  temperatureText: {
    color: colors.main,
    fontSize: 25,
  },
});

export default styles;
