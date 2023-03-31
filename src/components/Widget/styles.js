import { makeStyles } from '@material-ui/core';
import { isIE } from 'react-device-detect';

const baseWidget = (theme) => ({
  boxShadow: theme.customShadows.widget,
  borderRadius: 4,
  padding: theme.spacing(4),
  paddingTop: theme.spacing(4.4),
  paddingBottom: theme.spacing(6),
  border: 'solid 1px #e9e9e9',
});

export default makeStyles((theme) => ({
  widgetWrapper: {
    display: 'flex',
  },
  inheritHeight: {
    minHeight: 'auto',
  },
  widgetHeader: {
    paddingBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  widgetHeaderTable: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(4),
    paddingTop: theme.spacing(4.4),
    paddingBottom: theme.spacing(0),
  },
  widgetHeaderEmpty: {
    display: 'none',
  },
  widgetRootHeader: {
    boxShadow: theme.customShadows.widget,
    borderRadius: 4,
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(5),
    border: 'solid 1px #e9e9e9',
  },
  widgetRoot: {
    ...baseWidget(theme),
  },
  widgetRootTable: {
    ...baseWidget(theme),
    padding: theme.spacing(0),
    borderRadius: 4,
    paddingTop: 0,
  },
  widgetRootChart: {
    ...baseWidget(theme),
    padding: theme.spacing(4),
  },
  widgetApexRootChart: {
    ...baseWidget(theme),
    padding: theme.spacing(0),
    borderRadius: 4,
    paddingLeft: 7,
    paddingTop: 0,
    paddingBottom: 0,
  },
  widgetRootTinyChart: {
    ...baseWidget(theme),
    padding: theme.spacing(4),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  widgetBodyAlign: {
    justifyContent: 'space-between',
  },
  widgetFullHeightBody: {
    // https://stackoverflow.com/questions/24396205/flex-grow-not-working-in-internet-explorer-11
    ...isIE && { height: '100%' },
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  widgetRootEmpty: {
    ...baseWidget(theme),
    padding: 0,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 4,
    '& pre': {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  widgetBody: {
    height: (props) => (props.fullHeight ? '100%' : 'inherit'),
  },
  noPadding: {
    padding: 0,
  },
  paper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  moreButton: {
    position: 'relative',
    margin: -theme.spacing(2),
    padding: 0,
    width: 40,
    height: 40,
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.common.black,
    },
  },
  paddingTop: {
    paddingTop: theme.spacing(3),
  },
  searchIcon: {
    color: 'rgba(0, 0, 0, 0.23)',
  },
}));
