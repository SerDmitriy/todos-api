import { createStyles, makeStyles } from '@material-ui/core/styles';
import { COLORS } from 'constants/UI/colors.constants';

export const usePositionStyles = makeStyles(() =>
  createStyles({
    tablePaper: {
      boxShadow: 'none !important',
    },
    nameRow: {
      color: COLORS.baseLightColor,
      backgroundColor: '#F2F9FA',
    },
    headerWrapper: {
      display: 'flex',
      paddingTop: '30px',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '10px 40px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
    },
    headerRow: {
      display: 'contents',
    },
    headerCell: {
      width: '34%',
      color: COLORS.basePlaceholderColor,
      fontSize: '16px',
      fontWeight: 'bold',
    },
    smallCell: {
      width: '12%',
      height: '35px',
      padding: '5px 0 5px 25px',
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
    addText: {
      fontWeight: 700,
      margin: '0 20px',
      color: COLORS.baseDarkColor,
    },
  })
);
