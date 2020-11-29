import React from "react";
import Modal from "react-modal";

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
        <div>Email</div>
        <form>
          <input />
          <button>Add</button>
          <button onClick={closeModal}>cancel</button>
        </form>
      </Modal>
    </div>
  );
};