import {StyleSheet} from 'react-native';
import {metrics} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  desc: {
    paddingHorizontal: metrics.horizontal.pagePadding,
    paddingTop: metrics.vertical.spacing.s,
    ...metrics.fonts.regular,
  },
});
