import { Modal } from "@material-ui/core"
import React from "react"

function ModalKoinot({ display, content, callback }) {
  return (
    <Modal className={`modal ${display}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h4>{content}</h4>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn" onClick={() => callback("d-none")}>
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalKoinot
