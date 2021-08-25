import { useLocation, Switch, Route } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      position: 'absolute',
      transform: 'translateY(40px)',
    },
    enter: {
      opacity: 1,
      posisiton: 'absolute',
      transform: 'translateY(0px)',
    },
    leave: {
      opacity: 0,
      position: 'absolute',
      transform: 'transolteX(40px)',
    },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </animated.div>
  ));
}
