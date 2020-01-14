import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../../features/nav/navBar/NavBar';
import HomePage           from '../../features/home/HomePage';
import EventDashboard     from '../../features/event/eventDashboard/EventDashboard';
import EventDetailedPage  from '../../features/event/eventDetailed/EventDetailedPage';
import PeopleDashboard    from '../../features/user/peopleDashboard/PeopleDashboard';
import UserDetailed       from '../../features/user/userDetailed/UserDetailed';
import SettingsDashboard  from '../../features/user/settings/SettingsDashboard';
import EventForm          from '../../features/event/eventForm/EventForm';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route path='/(.+)' render={() => (
          <Fragment>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path='/events' component={EventDashboard} />
                <Route path='/events/:id' component={EventDetailedPage} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/profile/:id' component={UserDetailed} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/createEvent' component={EventForm} />
              </Switch>
            </Container>
          </Fragment>
        )} />
      </Fragment>

    );
  }
}

export default App;
