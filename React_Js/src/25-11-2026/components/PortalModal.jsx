
import React from "react";
import { createPortal } from "react-dom";

function PortalModal({ closeModal }) {

  return createPortal(

    <div style={{
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <div style={{
        backgroundColor: "white",
        color: "black",
        padding: "30px",
        borderRadius: "10px"
      }}>

        <h2>React Portal Example</h2>

        <p>This popup is rendered using a Portal.</p>

        <button onClick={closeModal}>
          Close
        </button>

      </div>

    </div>,

    document.getElementById("portal-root")

  );
}

export default PortalModal;
