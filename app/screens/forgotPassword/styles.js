import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: colors => ({
    paddingHorizontal: 18,
    backgroundColor: colors.light100,
    flex: 1,
    paddingTop: 20,
  }),
  header: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 100,
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-start',
  },
  button: colors => ({
    backgroundColor: colors.violet100,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 35,
  }),
});
