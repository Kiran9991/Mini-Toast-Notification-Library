import ReactDom from "react-dom";

import "./ShowModal.css";

const ShowModal = (props) => {
  return ReactDom.createPortal(
    <div className="modalWrapper">
      <div className="modalContainer">{props.children}</div>
    </div>,
    document.getElementById("modalOverlay")
  );
};

export default ShowModal;
