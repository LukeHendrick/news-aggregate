import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Footer extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    window.scrollTo(0,0);
  }
  render() {
    if (this.props.sources === undefined) {
      return (
        <Navbar fluid fixedBottom>
          <Navbar.Header >
            <Navbar.Brand>
              News Aggregator<span className='smallerTxt'> - powered by <a href='https://newsapi.org/' target='_blank' rel='noopener noreferrer'>NewsAPI</a></span>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      )
    }
    return (
      <Navbar fluid fixedBottom>
        <Navbar.Header >
          <Navbar.Brand>
            News Aggregator<span className='smallerTxt'> - powered by <a href='https://newsapi.org/' target='_blank' rel='noopener noreferrer'>NewsAPI</a></span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem className='hidden-xs hidden-sm hidden-md' href='#' onClick={this.handleClick}>Top</NavItem>
            <NavItem className='hidden-lg'href={'#' + this.props.sources[0]}>{this.props.labels[0]}</NavItem>
            <NavItem className='hidden-lg'href={'#' + this.props.sources[1]}>{this.props.labels[1]}</NavItem>
            <NavItem className='hidden-lg'href={'#' + this.props.sources[2]}>{this.props.labels[2]}</NavItem>
            <NavItem className='hidden-lg'href={'#' + this.props.sources[3]}>{this.props.labels[3]}</NavItem>
            <NavItem href='/' className='nav-item'>Reset</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}


export default Footer;
