import { createStyles, makeStyles } from '@material-ui/core/styles';
import { COLORS } from 'constants/UI/colors.constants';
import { hexToRgbA } from 'helpers/colors/hex-with-opacity';

export const usePositionRowStyles = makeStyles(() =>
  createStyles({
    nameCell: {
      height: '35px',
      padding: '5px 0 5px 25px',
      color: 'inherit',
      fontWeight: 'bold',
      fontSize: '14px',
    },
    nameText: {
      width: '80px',
    },
    nameArrow: {},
    rotate: {
      transform: 'rotate(0.5turn)',
    },
    tableRow: {
      '&:nth-of-type(odd)': {
        backgroundColor: 'rgba(244, 245, 253, .3)',
      },
    },
    arrowWrapper: {
      height: '53px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
    tableArrow: {
      width: '40%',
      height: '25px',
      borderLeft: `1px dashed ${COLORS.disabledBtn}`,
      borderBottom: `1px dashed ${COLORS.disabledBtn}`,
    },
    disablePadding: {
      padding: '0',
    },
    alignFlex: {
      display: 'flex',
      alignItems: 'center',
    },
    btnCircle: {
      width: '25px',
      height: '25px',
      marginRight: '5px',
      borderRadius: '50%',
      backgroundColor: hexToRgbA('#25BAD1', 0.2),
    },
    baseBtn: {
      width: '17px',
      height: '17px',
      padding: '4px',
      color: 'inherit',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    nameRow: {
      color: COLORS.baseLightColor,
      backgroundColor: '#F2F9FA',
    },
    btnWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    transition: {
      // transition:
      transition: 'width 2s, height 2s, transform 2s',
      // transitionDelay: '1s',
    },
  })
);
