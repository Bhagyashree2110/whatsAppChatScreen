import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  baseView: {
    width: windowWidth,
    alignSelf: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 15
  },

  mainRowView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  leftRowView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '35%'
  },
  headerNameStyle: {
    color: '#1C1B1F',
    fontWeight: '600',
    fontSize: 18
  },
  lastSeenStyle: {
    color: '#9C9B9B',
    fontSize: 12,
    fontWeight: '400',
    paddingTop: 5
  },
  textHeader: {
    paddingLeft: 12
  }
});
