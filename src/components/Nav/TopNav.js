import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import Form from './Form.js'

export default class TopNav extends React.Component {
  render() {
    return (
      <div id="top-Nav">
        <div>
          <div className="top-header">
            
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href='/'><img id="top-header-logo-img" 
                    src="http://csvcus.homeaway.com/rsrcs/cdn-logos/2.11.0/bce/moniker/homeaway_us/logo-bceheader.svg"/>
                  </a>              
                </Navbar.Brand>

                <div id="input-forms">
                  <Form id={"destination-search-input"} />
                  <Form/>
                  <Form/>
                  <Button id="search-button" bsSize="large">Search</Button>
                </div>

            </Navbar.Header>
            <div>
            <Nav>
                <NavItem>Trip Boards</NavItem>
                  <NavDropdown title="Login" id="Login">
                    <MenuItem>Traveler Login</MenuItem>
                    <MenuItem>Owner Login</MenuItem>
                  </NavDropdown>
                  <NavDropdown title="Help" id="Help">
                    <MenuItem>Vist help center</MenuItem>
                    <MenuItem divider />
                    <MenuItem>Travelers</MenuItem>
                    <MenuItem>How it works</MenuItem>
                    <MenuItem>Security Center</MenuItem>
                    <MenuItem divider />
                    <MenuItem>Homeowners</MenuItem>
                    <MenuItem>How it works</MenuItem>
                    <MenuItem>List your property</MenuItem>
                    <MenuItem>Community</MenuItem>
                    <MenuItem>Discovery Hub</MenuItem>
                    <MenuItem divider />
                    <MenuItem>Property managers</MenuItem>
                    <MenuItem>List your properties</MenuItem>
                </NavDropdown>    
              </Nav>


              <Button id="list-your-prop-button" bsSize="large">List your property</Button>
              <div id="birdhouse-logo">
                <img alt="HomeAway birdhouse" 
                     src="http://csvcus.homeaway.com/rsrcs/cdn-logos/2.11.0/bce/moniker/homeaway_us/birdhouse-bceheader.svg"
                />
              </div>
            </div>
            
            
              
          
          </Navbar>
          </div>
          
        </div>
      
      </div>
    )
  }
}