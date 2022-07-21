import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddLocal from '../components/AddLocal';
import LocalList from '../components/LocalList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditLocal from '../components/EditLocal';

const AppRouter = () => {
  const [locals, setLocals] = useLocalStorage('locals', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
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
            <Route component={() => <Redirect to="/" />} 
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;