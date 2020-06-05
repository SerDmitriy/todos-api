import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core';
import { SETTINGS_NAV_TAB } from 'constants/UI/tabs/settings-nav-tabs';
import { useSettingsStyles } from 'modules/main/settings/settings.styles';
import { ROUTE } from 'constants/routes';

export const SettingsNavigationTabs = () => {
  const classes = useSettingsStyles();
  const history = useHistory();
  const [value, setValue] = useState(2);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const goToTab = (link: string) => {
    history.push(`${ROUTE.settings}/${link.toLocaleLowerCase()}`);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      className={classes.tabsWrapper}
    >
      {SETTINGS_NAV_TAB.map(tab => (
        <Tab label={tab} key={tab} className={classes.tabStyle} onClick={() => goToTab(tab)} />
      ))}
    </Tabs>
  );
};
