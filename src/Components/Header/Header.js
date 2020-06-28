import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
};

export default Header;
