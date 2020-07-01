import React from "react";
import Modal from "react-modal";

const OptionModal = ({ selectedOption, handleClearDecision }) => {
  return (
    <Modal
      isOpen={!!selectedOption}
      onRequestClose={handleClearDecision}
      contentLabel="Selected Option"
    >
      <h1>Selected Option</h1>
      {selectedOption && <p>{selectedOption}</p>}
      <button onClick={handleClearDecision}>Okey</button>
    </Modal>
  );
};

export default OptionModal;
