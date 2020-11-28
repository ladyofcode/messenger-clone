import React from "react";
import { Styled } from "./ContactGroup.styles";
import { MessageDTO } from "../../common/dto/message-dto";

interface IContactGroupProps {
  items: MessageDTO[];
  groupName: string;
}
export default class ContactGroup extends React.Component<IContactGroupProps> {
  static defaultProps = {
    items: [],
    groupName: "No group name",
  };

  render() {
    return (
      <React.Fragment>
        <Styled.ContactListTitle>
          {this.props.groupName} (X/Y)
        </Styled.ContactListTitle>

        <Styled.ContactList>
          {this.props.items.map((item) => (
            <li key={item.id}>displayname</li>
          ))}
        </Styled.ContactList>
      </React.Fragment>
    );
  }
}
