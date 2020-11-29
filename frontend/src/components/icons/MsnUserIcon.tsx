import React from "react";
import { Icon } from "./Icons.styles";

const MsnUserIcon: React.FC = () => (
  <Icon src={process.env.PUBLIC_URL + "/MSN_icon.svg"} className="primary" />
);

export default MsnUserIcon;
