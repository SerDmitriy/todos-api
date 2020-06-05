import { createStyles, makeStyles } from '@material-ui/core';
import { COLORS } from 'constants/UI/colors.constants';

export const usePositionModalStyles = makeStyles(() =>
  createStyles({
    modalWrapper: {
      width: '590px',
      minHeight: '270px',
      padding: '15px 15px 15px 25px',
      backgroundColor: COLORS.baseGreyBackground,
    },
    content: {
      display: 'flex',
      maxHeight: '425px',
      overflowX: 'hidden',
      overflowY: 'auto',
    },
    flexColumn: {
      width: '45%',
      display: 'flex',
      padding: '20px',
      flexDirection: 'column',
    },
    infoWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: '100px',
    },
    dialogTitle: {
      height: 0,
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 0,
    },
    closeIcon: {
      fontSize: '28px',
      color: '#9FA8C0',
    },
    title: {
      margin: '20px 0',
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '30px',
      color: COLORS.baseDarkColor,
    },
    actionsWrapper: {
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: COLORS.baseGreyBackground,
    },
    text: {
      padding: '20px 0 20px 0',
      fontWeight: 'bold',
      fontSize: '14px',
    },
    addText: {
      fontWeight: 700,
      margin: '0 20px',
      color: COLORS.baseDarkColor,
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
    addWrapper: {
      height: '50px',
      display: 'flex',
      alignItems: 'center',
    },
  })
);
