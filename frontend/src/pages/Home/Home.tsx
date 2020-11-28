import React from "react";
import ContactGroup from "../../components/ContactGroup/ContactGroup";
import { MessageDTO } from "@shared/dto";
import { Styled } from './Home.styles';

const list: MessageDTO[] = [
  {
    id: 1,
    message: "I will destroy you, Aku. I swear it.",
    createdAt: "19-02-2004",
  },
  {
    id: 2,
    message: "Fool, no mortal can hurt the great Aku.",
    createdAt: "23-02-2004",
  },
  {
    id: 3,
    message: "I, Demongo, have come to collect the souls of the greatest warriors!",
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
    message: "What in sam hoot willy are you doing here?! You're a sight for these great big sore eyes! Ha!",
    createdAt: "23-02-2004",
  },
  {
    id: 7,
    message: "Oh man. All this walking is hurting my neck.",
    createdAt: "19-02-2004",
  }
];

export default class Home extends React.Component {
  render() {
    const customGroupName = ["Some friends", "Online", "Offline"];

    return (
      <React.Fragment>
        <Styled.TopBar>
            <div>
                   Image 
            </div>
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
        </Styled.TopBar>

        <Styled.GroupsContainer>

            <ContactGroup items={list} groupName={customGroupName[0]}/>

            <ContactGroup items={list} groupName={customGroupName[0]}/>

            <ContactGroup items={list} groupName={customGroupName[0]}/>

            <ContactGroup items={list} groupName={customGroupName[1]}/>

            <ContactGroup items={list} groupName={customGroupName[2]}/>

            <Styled.AddContact><span>+</span> Add a contact</Styled.AddContact>


        </Styled.GroupsContainer>
        
      </React.Fragment>
    );
  }
}
