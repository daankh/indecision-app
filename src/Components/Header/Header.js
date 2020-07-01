import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      {subtitle && <p className="header__subtitle">{subtitle}</p>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
};

export default Header;
