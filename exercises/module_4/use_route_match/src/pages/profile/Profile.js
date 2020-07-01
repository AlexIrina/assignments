import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import Info from './Info';
import Settings from './Settings';
const Profile = () => {
  const { url, path } = useRouteMatch();
  return (
    <div className='profile'>
      <h1>Profile Page</h1>
      <ul className='profile-list'>
        <li>
          <Link to={`${url}/info`}>Profile Info</Link>
        </li>
        <li>
          <Link to={`${url}/settings`}>Profile Settings</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/info`}>
          <Info />
        </Route>
        <Route path={`${path}/settings`}>
          <Settings />
        </Route>
      </Switch>
    </div>
  );
};

export default Profile;
