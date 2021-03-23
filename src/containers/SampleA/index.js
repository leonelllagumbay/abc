import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import SampleC from '../SampleC';

const SampleA = () => {
  let match = useRouteMatch();
  return (
    <div>
      Sample A
      <Switch>
        <Route path={`${match.path}/:sampleId`}>
          <SampleC />
        </Route>
        <Route path={match.path}>
          <h3>Please select a sample.</h3>
        </Route>
      </Switch>
    </div>
  )
}

export default SampleA;
