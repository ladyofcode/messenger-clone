import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/services/useAuth";
import { Styled } from "./Home.styles";
import { Contacts } from "./components";
import { useContacts } from "../../hooks/useContacts";
import { Transition } from "../../components";
import { waitForConnection } from "../../config/socket";
import { AddContactModal } from "../../components/";

const Home: React.FC = () => {
  const contacts = useContacts();
  const { logoutAccount, token, user } = useAuth();
  const [modalIsOpen, setIsOpen] = useState(false);
  const avatarSeed = user!.firstName + user!.lastName;

  useEffect(() => {
    if (!token) return;
    waitForConnection().then((socket) => {
      socket.emit("authenticate", { token }, (statusMessage: string) => {
        console.log(statusMessage);
      });
    });
  }, [token]);

  if (contacts.loading) {
    return <Transition />;
  }

  return (
    <Styled.HomeContainer>
      <AddContactModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <Styled.TopBar>
        <Styled.Avatar src={`https://avatars.dicebear.com/api/bottts/${avatarSeed}.svg`} />
        <div>
          <div>
            <h2>{user!.firstName} {user!.lastName}</h2>
            <select id="status" name="status">
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="dnd">Do not disturb</option>
            </select>
          </div>
          <p>{user!.statusMessage}</p>
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
        <Styled.AddContact onClick={() => setIsOpen(true)}>
          <span>+</span> Add a contact
        </Styled.AddContact>
      </Styled.GroupsContainer>
    </Styled.HomeContainer>
  );
};

export default Home;
