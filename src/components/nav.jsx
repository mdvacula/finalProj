<Container fluid>
  <Menu inverted size='large'>
    <Menu.Item  header>TBD</Menu.Item>
    <Menu.Item as={Link} to="/" name='main' active={activeItem === 'main'} onClick={this.handleItemClick} />
    <Menu.Item as={Link} to="/playlist" name='discover' active={activeItem === 'discover'} onClick={this.handleItemClick}/>
    <Menu.Item as={Link} to="/login" position="right"  name="login" active={activeItem === 'login'} onClick={this.handleLoginClick}/>
  </Menu>

    <Route exact path='/' component={MapContainer}/>
    {/* <Route exact path='login' component ={Login} /> */}

</Container>
