import { createStyles, makeStyles } from '@material-ui/core/styles';
import { COLORS } from 'constants/UI/colors.constants';
import { TRUNCATE_STYLES } from 'constants/UI/css.constants';

export const useHolidayStyles = makeStyles(() =>
  createStyles({
    tablePaper: {
      boxShadow: 'none !important',
    },
    tableRow: {
      '&:nth-of-type(odd)': {
        backgroundColor: 'rgba(244, 245, 253, .3)',
      },
    },
    headerWrapper: {
      display: 'flex',
      paddingTop: '30px',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '10px 40px',
    },
    createNewBtn: {
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      background: COLORS.baseLightColor,
      boxShadow: '5px 4px 10px rgba(37,186,209, .25)',
      color: 'white',
      '&:hover': {
        backgroundColor: COLORS.baseLightHoverColor,
      },
    },
    addHolidayText: {
      fontWeight: 700,
      margin: '0 20px',
      color: COLORS.baseDarkColor,
    },
    createHoliday: {
      display: 'flex',
      alignItems: 'center',
    },
    baseBtn: {
      width: '80px',
      padding: '8px 25px',
      marginRight: '7px',
      fontWeight: 600,
      fontSize: '12px',
      color: COLORS.baseDarkColor,
      backgroundColor: COLORS.darkBtnColor,
      border: `1px solid ${COLORS.baseDarkColor}`,
      boxShadow: '0px 4px 40px rgba(227, 240, 255, 0.3)',
      borderRadius: '5px',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    invertBtn: {
      color: COLORS.darkBtnColor,
      backgroundColor: COLORS.baseDarkColor,
    },
    margin: {
      marginLeft: '25px',
    },
    padding: {
      paddingLeft: '25px',
    },
    paddingLarge: {
      paddingLeft: '40px',
    },
    truncate: {
      ...TRUNCATE_STYLES,
    },
  })
);
