import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Button,
} from 'react-bootstrap'
import Form from './Form.js'
import TopRightHeader from './TopRightHeader.js'

export default class TopNav extends React.Component {
  render() {
    return (
      <div id="top-Nav">
        <div>
          <div className="top-header">
            <Navbar id='main-navbar'>
              <div id='main-logo-container'>
                  <a href="/" id='main-logo'>
                    <img
                      id="top-header-logo-img"
                      src="http://csvcus.homeaway.com/rsrcs/cdn-logos/2.11.0/bce/moniker/homeaway_us/logo-bceheader.svg"
                    />
                  </a>
              </div>
             
              <TopRightHeader />
            </Navbar>
            <div id="input-forms">
              <Form id={'destination-search-input'}
                    secondId={'destination-form'}placeholder={'Where'}/>
              <Form placeholder={'Arrive'}/>
              <Form placeholder={'Depart'}/>
              <Button id="search-button" bsSize="large">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
