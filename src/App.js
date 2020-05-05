import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';

import Menu from './menu';
import Login from './login';

const App = () => (
  <Fragment>
    <Menu />
    <Container>
      <Login />
    </Container>
  </Fragment>
);

export default App;
