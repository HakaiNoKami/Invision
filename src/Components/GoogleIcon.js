import React from "react";
import { SvgIcon } from "@material-ui/core";

// Images
import { ReactComponent as Google } from "../Images/Google.svg";

const GoogleIcon = () => {
  return <SvgIcon component={Google} viewBox="0 0 30 30"/>;
};

export default GoogleIcon;
