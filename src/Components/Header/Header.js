import React, { Component } from "react";

class Header extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    );
  }
}

export default Header;
