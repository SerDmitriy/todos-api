import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useSettingsStyles } from 'modules/main/settings/settings.styles';
import { Holidays } from 'modules/main/settings/holidays';
import { Main } from 'modules/main/settings/main';
import { Positions } from 'modules/main/settings/positions';
import { SettingsNavigationTabs } from 'modules/main/settings/components/settings-navigations-tabs';

export const Settings: React.FC = () => {
  const classes = useSettingsStyles();
  const { path } = useRouteMatch();

  return (
    <div className={classes.root}>
      <div className={classes.settingsWrapper}>
        <div>
          <div className={classes.textSettings}>Settings</div>
          <SettingsNavigationTabs />
        </div>
        <div>
          <Switch>
            <Route path={`${path}/main`} component={Main} />
            <Route path={`${path}/positions`} component={Positions} />
            <Route path={`${path}/holidays`} component={Holidays} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
