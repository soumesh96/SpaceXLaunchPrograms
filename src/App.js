import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store'
import Home from './Containers/Home';
import Header from './Containers/Header';
import Footer from './Containers/Footer';
import ErrorBoundary from './Components/ErrorBoundary';
import NoPageFound from './Components/PageNotFound';
import { MainHomeWrapper } from './Containers/Home/skins';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <MainHomeWrapper>
          <Header />
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/home" />} />
              <Route exact path="/home" component={Home} />
              <Route component={NoPageFound} />
            </Switch>
          <Footer />
        </MainHomeWrapper>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
