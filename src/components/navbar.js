import React, { Component } from 'react';
import LeftNavbarItems from './leftNavbarItems';
import RightNavbarItems from './rightNavbarItems';
import data from '../../navigation.json';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftItems: data.leftNav,
            rightItems: data.rightNav,
            isActive: false
        };
      this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
      const { isActive } = this.state;
      this.setState({ isActive: !isActive });
    }
    render() {
        return (
          <div>
            <img src="../thredup-logo.png" alt="logo" />
            <div className={`navbar ${this.state.isActive ? 'menuOpen' : ''}`}>
              <LeftNavbarItems leftItems={this.state.leftItems} />
              <RightNavbarItems rightItems={this.state.rightItems} />
            </div>
            <a href="#" onClick={this.toggleNav}><i data-feather="menu"></i></a>
          </div>
        );
    }
}

export default Navbar;
