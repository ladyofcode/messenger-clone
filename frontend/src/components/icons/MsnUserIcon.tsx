import React from "react";
import { Icon } from "./Icons.styles";

const MsnUserIcon: React.FC = () => (
  <Icon src={process.env.PUBLIC_URL + "/userIcon.png"} className="primary" />
);

export default MsnUserIcon;
