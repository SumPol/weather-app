import {StyleSheet} from 'react-native';
import colors from '../../assets/colorThemes';

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    borderColor: colors.main,
    borderBottomWidth: 3,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  headerText: {
    color: colors.main,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  crossImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    position: 'absolute',
    right: 5,
  },
  cityText: {
    color: colors.main,
    fontSize: 25,
    marginLeft: 10,
  },
});

export default styles;
