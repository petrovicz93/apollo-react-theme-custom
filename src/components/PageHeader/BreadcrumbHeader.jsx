import {
  Box, Breadcrumbs, Grid, Typography,
} from '@material-ui/core';
import React from 'react';
import {
  Link as RouteLink,
  HashRouter,
} from 'react-router-dom';
import { HomeRounded, NavigateNext } from '@material-ui/icons';
import Widget from '../Widget/Widget';
import useStyles from './styles';

export const HashHeader = ({ id, label, dashboardRoute }) => (
  <HashRouter
    key={`${id}${label}`}
    basename="/"
  >
    <Breadcrumbs
      separator={<NavigateNext />}
      aria-label="breadcrumb"
    >
      <Typography variant="h6" weight="medium" color="colorNeutral6">
        <RouteLink to={dashboardRoute}>
          <HomeRounded />
        </RouteLink>
      </Typography>
      <Typography variant="h6" weight="semiBold" color="colorBlack" aria-current="page">
        {label}
      </Typography>
    </Breadcrumbs>
  </HashRouter>
);

export const NoChildrenHeader = ({ id, label }) => (
  <Box display="flex" alignItems="center" key={`${id}lyt`}>
    <Breadcrumbs aria-label="breadcrumb">
      <Typography variant="h4">{label}</Typography>
    </Breadcrumbs>
  </Box>
);

const BreadcrumbHeader = ({ dashboardRoute, pageObject }) => {
  const classes = useStyles();

  const { children, id, label } = pageObject;

  return (
    <Widget
      disableWidgetMenu
      inheritHeight
      className={classes.margin}
      bodyClass={classes.navPadding}
      variant="header"
    >
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        wrap="nowrap"
        style={{ overflowX: 'auto', overflowY: 'hidden' }}
      >
        {children
          ? (
            <HashHeader
              id={id}
              label={
                children.find(({ link }) => window.location.hash.includes(link))
              }
              dashboardRoute={dashboardRoute}
            />
          )
          : <NoChildrenHeader id={id} label={label} />}
      </Grid>
    </Widget>
  );
};

export default BreadcrumbHeader;
