import React, { useState } from "react";
import Modal from "react-modal";
import "./modal.scss";
import { TfiWorld } from "react-icons/tfi";

Modal.setAppElement("#root"); // Set the root element for accessibility

const HtmlModal = ({ isOpen, onRequestClose, onSave,setWebsiteUrl }) => {
  const [url, setUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true); // Initially set to true

  const handleSave = (url) => {
    // You can perform any logic you need with the entered URL here
    if (isValidUrl) {
      onSave(url);
      setWebsiteUrl(url); // Update the parent component's state
      setUrl(""); // Clear the URL input
      onRequestClose(); // Close the modal
      setShowOptionsCard(true)
    }
  };

  const handleUrlChange = (e) => {
    const inputUrl = e.target.value;
    // Define your URL pattern regex here, e.g., for a basic URL pattern:
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  
    if (inputUrl === "") {
      setIsValidUrl(true); // Empty field is considered valid
    } else {
      setIsValidUrl(urlPattern.test(inputUrl));
    }
  
    setUrl(inputUrl);
  };
    
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={`modal-content ${isOpen ? "isOpen" : ""}`} // Apply modal-content and isOpen classes
      overlayClassName="modal-overlay"
    >
      <div className="modal-header md:p-3 sm:p-0">
        <h2>Add Website To Convert</h2>
        <button className="close-button" onClick={onRequestClose}>
          <span className="close-icon fw-700 ">X</span>
        </button>
      </div>
      <div className="modal-body">
        <h4
          className="testimonials__title text-xl text-dark-1 mt-0"
          style={{ alignSelf: "start" }}
        >
          Write the Website Url
        </h4>
        <div className="input-container">
          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={handleUrlChange}
            className={`input-field ${isValidUrl ? "" : "invalid-url"}`}
          />
          <TfiWorld className="input-icon" />
         
        </div>

        {!isValidUrl && <p className="validation-message  " style={{color:"red" ,alignSelf:"start"}}>The Url Pattren Is Inavlaid</p>}
      </div>

      <div className="modal-footer pb-3">
      <button
          className={`submit-buttonn ${isValidUrl ? "" || url === "" : "disabled-button"}`}
          onClick={handleSave}
          style={{ width: "150px" }}
          disabled={!isValidUrl || url === ""}
        >
          Add
        </button>
      </div>
    </Modal>
  );
};

export default HtmlModal;