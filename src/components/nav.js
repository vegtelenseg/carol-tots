import React, { Component } from 'react';

class Nav extends Component {
  render() {
		const styles = {
			background: "rgba(110, 127, 238, 0.76)"
		}
    return (
      <nav style={styles}>
  <div className="nav-wrapper container">
    <a href="#home" className="brand-logo">Carol Tots</a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><a href="#for-who">For Who</a></li>
      <li><a href="#where">Where</a></li>
      <li><a href="#why">Why</a></li>
      <li><a href="#contact">Get In Touch</a></li>
    </ul>
  </div>
</nav>
    );
  }
}

export default Nav;
