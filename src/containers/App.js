import React, {Component} from 'react';
import {Menu, Container, Dropdown, Icon, Input, Rail} from 'semantic-ui-react';
import MapContainer from '../components/Map.jsx';
import SideMenu from '../components/sideMenu';


const App = (props) => (
  <div>
  <SideMenu />
  <MapContainer />
  </div>
)

export default App;
