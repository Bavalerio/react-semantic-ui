import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message,
} from 'semantic-ui-react';

export default () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h2" textAlign="center">
        Login
      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Passwords"
            type="password"
          />
          <Button color="blue" fluid size="large">
            Login
          </Button>
        </Form>
      </Segment>
      <Message>
        Not registered yet? <a href="#">Sing Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);
