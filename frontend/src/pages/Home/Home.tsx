import React from "react";
import ContactGroup from "../../components/ContactGroup/ContactGroup";
import { IMessageDTO } from "@shared/dto";

const list: IMessageDTO[] = [
  {
    id: 1,
    message: "woef",
    displayName: "That friend in the contact list",
    createdAt: "19-02-2004",
  },
  {
    id: 2,
    message: "tabbs is a little nutty.",
    displayName: "That friend in the contact list",
    createdAt: "23-02-2004",
  },
];

export default class Home extends React.Component {
  render() {
    const customGroupName = ["Some friends", "Online", "Offline"];

    return (
      <React.Fragment>
        {/* Main menu*/
        /* User details */
        /* Custom groups contacts */}
        <ContactGroup items={list} groupName={customGroupName[0]} />
        {/* Online contacts */}
        <ContactGroup items={list} groupName={customGroupName[1]} />
        {/* Offline contacts */}
        <ContactGroup items={list} groupName={customGroupName[2]} />
        {/* Add a contact */}
      </React.Fragment>
    );
  }
}
