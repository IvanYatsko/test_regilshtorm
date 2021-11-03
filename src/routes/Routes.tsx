import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MainPageContainer } from '../containers';

export const Router: React.FC = () => {
  const location = useLocation();
  return (
      <TransitionGroup className="page">
          <CSSTransition timeout={300} classNames="fade" key={location.key}>
            <Switch location={location}>
                <Route component={MainPageContainer} path="/" exact />
                {/* <Route component={} path="" /> */}
            </Switch>
          </CSSTransition>
      </TransitionGroup>
  );
};
