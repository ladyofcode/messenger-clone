import React, { FormEvent } from "react";
import { ContactsApi } from "../../api/Contacts.api";
import * as SC from "./AddContact.styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "5rem",
  },
  stack: {
    display: "flex",
    flexFlow: "column nowrap",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#fancyIdForElectron");
interface IContactModalProps {
  modalIsOpen: any;
  setIsOpen: any;
}

const AddContactModal: React.FC<IContactModalProps> = ({
  modalIsOpen,
  setIsOpen,
}) => {
  // @ts-ignore
  let subtitle = null;
  const [email, setEmail] = React.useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault(); // not sure if necessary
    if (email.length <= 0) return;
    ContactsApi.addContact({ email });
  }

  return (
    <div>
      <SC.Container
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add a contact"
      >
        <SC.InnerContainer>
          <SC.Heading ref={(_subtitle) => (subtitle = _subtitle)}>
            Add a contact
          </SC.Heading>
          <form onSubmit={(e) => handleSubmit(e)} style={customStyles.stack}>
            <SC.Label>
              Email:
              <SC.Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </SC.Label>
            <SC.Box>
              <SC.Button type="submit" value="Add" className="primary mr-2">
                Add Contact
              </SC.Button>
              <SC.Button onClick={closeModal} className="secondary">
                cancel
              </SC.Button>
            </SC.Box>
          </form>
        </SC.InnerContainer>
      </SC.Container>
    </div>
  );
};

export default AddContactModal;
