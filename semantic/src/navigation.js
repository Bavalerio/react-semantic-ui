import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

function NavigationBar() {
  return (
    <Menu pointing secondary>
      <Menu.Item icon="home" name="home" href="/somelink" />
      <Menu.Item icon="box" name="post" href="/somelink" />
      <Menu.Item icon="address book" name="contact" href="somelink" />
    </Menu>
  );
}

export default NavigationBar;
