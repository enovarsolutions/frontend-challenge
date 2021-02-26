import React from "react";
import { Link } from "react-router-dom";

const MyLink = ({ children, route }) => {
  if (!route) {
    return children;
  }

  return <Link to={route}>{children}</Link>;
};

export default MyLink;
