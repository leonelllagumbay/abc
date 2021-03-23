import React from "react";
import AuthPage from "./containers/AuthPage";
import { Switch, Route } from "react-router-dom";
// Link
import SampleA from "./containers/SampleA";
import SampleB from "./containers/SampleB";
import { Wrapper } from "./Wrapper";

// Import i18n messages
// import { translationMessages, languages } from './i18n';

function App() {
  return (
    <Wrapper>
      <Switch>
        <Route path="/samplea">
          <SampleA />
        </Route>
        <Route path="/sampleb">
          <SampleB />
        </Route>
        <Route path="/">
          <AuthPage />
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;
