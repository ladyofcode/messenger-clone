import React, { FormEvent } from "react";
import Modal from "react-modal";
import { ContactsApi } from "../../api/Contacts.api";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#fancyIdForElectron");

export const AddContactModal: React.FC = () => {
  // @ts-ignore
  let subtitle = null;
  const [email, setEmail] = React.useState('');
  const [modalIsOpen, setIsOpen] = React.useState(true);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // @ts-ignore
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();  // not sure if necessary
    ContactsApi.addContact({email});
  }

  return (
    <div>
      <button onClick={openModal}>Add a Contact</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add a contact"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add a contact</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <label>
            Email:
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <input type="submit" value="Add" />
          <button onClick={closeModal}>cancel</button>
        </form>
      </Modal>
    </div>
  );
};