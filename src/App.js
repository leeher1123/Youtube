import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import { GlobalStyle } from './style/GlobalStyle';
import Header from './views/shared/components/header';

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Container>
);

const Container = styled.div`

`;

export default App;
