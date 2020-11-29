import React from "react";
import { useAuth } from "../../hooks/services/useAuth";
import { Styled } from "./Home.styles";
import { Contacts } from "./components";
import { useContacts } from "../../hooks/useContacts";
import { Transition } from "../../components";

const Home: React.FC = () => {
  const contacts = useContacts();
  const { logoutAccount } = useAuth();

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

        <Styled.AddContact>
          <span>+</span> Add a contact
        </Styled.AddContact>
      </Styled.GroupsContainer>
    </React.Fragment>
  );
};

export default Home;
