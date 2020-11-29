import React from "react";
import ContactGroup from "../../components/ContactGroup/ContactGroup";
import { useAuth } from "../../hooks/services/useAuth";
import { MessageDTO } from "../../common/dto/message-dto";

const list: MessageDTO[] = [
  {
    id: 1,
    message: "woef",
    createdAt: "19-02-2004",
  },
  {
    id: 2,
    message: "tabbs is a little nutty.",
    createdAt: "23-02-2004",
  },
];

const customGroupName = ["Some friends", "Online", "Offline"];

const Home: React.FC = () => {
  const { user } = useAuth();

  console.log(user);

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
};

export default Home;
