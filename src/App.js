import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import { GlobalStyle } from './style/GlobalStyle';
import Header from './views/shared/components/Header';
import Search from './pages/Search';
import Watch from './pages/Watch';

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search/:id" component={Search} />
      <Route exact path="/watch/:videoId" component={Watch} />
    </Switch>
  </Container>
);

const Container = styled.div`

`;

export default App;
