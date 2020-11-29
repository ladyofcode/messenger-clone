import React, { useEffect } from "react";
// import ContactGroup from "../../components/ContactGroup/ContactGroup";
import { useAuth } from "../../hooks/services/useAuth";
import { MessageDTO } from "../../common/dto/message-dto";
import { Styled } from "./Home.styles";
import { Contacts } from "./components";
import { useContacts } from "../../hooks/useContacts";
import { Transition } from "../../components";
import socketIOClient from "socket.io-client";
import { constants } from "../../config/constants";

const list: MessageDTO[] = [
  {
    id: 1,
    message: "I will destroy you, Aku. I swear it.",
    createdAt: "19-02-2004",
  },
  {
    id: 2,
    message: "I love you too tabss <3",
    createdAt: "23-02-2004",
  },
  {
    id: 3,
    message:
      "I, Demongo, have come to collect the souls of the greatest warriors!",
    createdAt: "19-02-2004",
  },
  {
    id: 4,
    message: "You look hideous.",
    createdAt: "23-02-2004",
  },
  {
    id: 5,
    message: "woef",
    createdAt: "19-02-2004",
  },
  {
    id: 6,
    message:
      "What in sam hoot willy are you doing here?! You're a sight for these great big sore eyes! Ha!",
    createdAt: "23-02-2004",
  },
  {
    id: 7,
    message: "Oh man. All this walking is hurting my neck.",
    createdAt: "19-02-2004",
  },
];

const customGroupName = ["Some friends", "Online", "Offline"];
const socket = socketIOClient(constants.SOCKETS_PATH);

const Home: React.FC = () => {
  const contacts = useContacts();
  const { logoutAccount } = useAuth();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  if (contacts.loading) {
    return <Transition />;
  }

  return (
    <React.Fragment>
      <Styled.TopBar>
        <div>Image</div>
        <div>
          <div>
            <h2>SoWhale </h2>
            <select id="status" name="status">
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="dnd">Do not disturb</option>
            </select>
          </div>
          <p>Donny says he's going insane - but he's already there</p>
        </div>
        {/* remove this whenever */}
        <button
          style={{ width: "100px", height: "50px" }}
          onClick={() => logoutAccount()}
        >
          logout
        </button>
      </Styled.TopBar>

      <Styled.GroupsContainer>
        <Contacts {...contacts} />
        {/* <ContactGroup items={list} groupName={customGroupName[0]} />
        <ContactGroup items={list} groupName={customGroupName[0]} />
        <ContactGroup items={list} groupName={customGroupName[0]} />
        <ContactGroup items={list} groupName={customGroupName[1]} />
        <ContactGroup items={list} groupName={customGroupName[2]} /> */}
        <Styled.AddContact>
          <span>+</span> Add a contact
        </Styled.AddContact>
      </Styled.GroupsContainer>
    </React.Fragment>
  );
};

export default Home;
