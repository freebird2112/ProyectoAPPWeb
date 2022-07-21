import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddLocal from '../components/AddLocal';
import LocalList from '../components/LocalList';
import LocalListU from '../components/LocalListU';
import useLocalStorage from '../hooks/useLocalStorage';
import EditLocal from '../components/EditLocal';
import { Redirect } from 'react-router-dom';
import P1 from '../components/User';
import P2 from '../components/Establecimiento';


const AppRouter = () => {
  const [locals, setLocals] = useLocalStorage('locals', []);

  return (
    <BrowserRouter>
    <header>
      <h1>Aplicación Appster</h1>
    </header>
    <div class="row">
  <div class="column"><P1></P1></div>
  <div class="column"><P2></P2></div>
</div>
    <div>
      <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <LocalList {...props} locals={locals} setLocals={setLocals} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddLocal {...props} locals={locals} setLocals={setLocals} />
              )}
              path="/add"
            />
            <Route 
              render={(props) => (
                <EditLocal {...props} locals={locals} setLocals={setLocals} />)} 
                path="/edit/:id"
            />
            <Route
              render={(props) => (
                <LocalListU {...props} locals={locals} setLocals={setLocals} />
              )}
              path="/list"
              exact={true}
            />
            <Route component={() => <Redirect to="/" />} 
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;