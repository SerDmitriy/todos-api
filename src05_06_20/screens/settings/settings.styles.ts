import { createStyles, makeStyles } from '@material-ui/core';
import { COLORS } from 'constants/UI/colors.constants';

export const useSettingsStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '50px 20px 50px 20px',
    },
    cardsWrapper: {
      maxHeight: '100px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    settingsWrapper: {
      margin: '0 auto',
      padding: '12px 0 0 0',
    },
    textSettings: {
      height: '50px',
    },
    tabsWrapper: {
      minHeight: '40px',
      marginTop: '20px',
    },
    tabStyle: {
      width: '100px',
      height: '40px',
      marginRight: '5px',
      fontWeight: 'bold',
      fontSize: '12px',
      color: COLORS.baseDarkColor,
    },
  })
);
