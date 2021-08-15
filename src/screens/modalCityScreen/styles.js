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
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 35,
    borderColor: colors.main,
    borderBottomWidth: 2,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  searchImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  input: {
    flex: 1,
    color: colors.main,
    paddingLeft: 8,
    marginRight: 35,
    fontSize: 18,
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
  },
  crossButton: {
    position: 'absolute',
    right: 5,
  },
  cityText: {
    color: colors.main,
    fontSize: 25,
    marginHorizontal: 10,
  },
  regionText: {
    fontSize: 18,
    color: colors.regionText,
  },
  scrollView: {
    flex: 1,
  },
  messageText: {
    fontSize: 18,
    color: colors.main,
    textAlign: 'center',
  },
});

export default styles;
