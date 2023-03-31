import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  card: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  progressSection: {
    marginBottom: theme.spacing(1),
  },
  progressTitle: {
    marginBottom: theme.spacing(2),
  },
  progress: {
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.colorWhite.main,
    height: 24,
    root: {
      backgroundColor: theme.palette.colorNeutral3.main,
      borderRadius: 20,
      bar: {
        borderRadius: 20,
      },
    },
  },
  pieChartLegendWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: theme.spacing(1),
    width: '100%',
  },
  legendItemContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    justifyContent: 'space-between',
    width: '100%',
  },
  fullHeightBody: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  fullHeightBodyBottom: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'flex-end',
  },
  alignStandaloneElement: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tableWidget: {
    overflowX: 'auto',
  },
  progressBar: {
    backgroundColor: theme.palette.colorDataViz1.main,
    borderRadius: 4,
  },
  performanceLegendWrapper: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  legendElement: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
  legendElementText: {
    marginLeft: theme.spacing(1),
  },
  serverOverviewElement: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '100%',
  },
  serverOverviewElementText: {
    minWidth: 149,
    paddingRight: theme.spacing(2),
  },
  serverOverviewElementChartWrapper: {
    width: '100%',
  },
  mainChartBody: {
    overflowX: 'auto',
  },
  mainChartHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.only('xs')]: {
      flexWrap: 'wrap',
    },
  },
  mainChartHeaderLabels: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.only('xs')]: {
      order: 3,
      width: '100%',
      justifyContent: 'center',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  },
  mainChartHeaderLabel: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(3),
  },
  mainChartSelectRoot: {
    borderColor: `${theme.palette.text.hint}80 !important`,
  },
  mainChartSelect: {
    padding: 10,
    paddingRight: 25,
  },
  mainChartLegentElement: {
    fontSize: '14px !important',
    marginLeft: theme.spacing(1),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  fixIconRight: {
    '& .MuiSelect-icon': {
      right: 4,
    },
  },
  checkboxColor: {
    color: 'rgb(185, 185, 185)',
  },
}));
