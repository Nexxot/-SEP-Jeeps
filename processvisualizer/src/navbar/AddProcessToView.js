import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './css/NavBarCss.css'

function AddProcess({}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" className="btn btn-light" onClick={handleShow}>
        UPDATE VIEW
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose process views</Modal.Title>
        </Modal.Header>
        <Modal.Body>Select:
        <div class="form-check">
             <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked="true"
            />
            <label class="form-check-label " for="flexCheckDefault">
            Order2Cash 
            </label>
            <span class="colorViewSquareBlue"></span>
        </div>
        <div class="form-check">
             <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked="true"
            />
            <label class="form-check-label" for="flexCheckDefault">
            Plan2Deliver
            </label>
            <span class="colorViewSquareRed"></span>
        </div>
        <div class="form-check">
             <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked="true"
            />
            <label class="form-check-label" for="flexCheckDefault">
            Design2Release
            </label>
            <span class="colorViewSquarePurple"></span>
        </div>
        <div class="form-check">
             <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
            Produce2Pay
            </label>
            <span class="colorViewSquareGreen"></span>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProcess;