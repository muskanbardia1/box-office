import React from "react";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Switch>

      <Route exact path="/">
        This is home page
      </Route>

      <Route exact path="/starred">
        This is Starred
      </Route>

      <Route>
        This is Error 404!!!!
      </Route>

    </Switch>
  );
}

export default App;
