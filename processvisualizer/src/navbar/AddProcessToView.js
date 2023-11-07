import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProcess({updateState, initValuesProcessView}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState(initValuesProcessView);

  const checkOneRef = useRef();

  const handleConfirm = () => {
    // Call the updateState function to update the state in the grandparent component
    const isCheckedOne = checkOneRef.current.isChecked;
    const valueOne = '1'; // VALUE MATTERS, if String then check needs to be String
    if (isCheckedOne) {
        // If it's checked, remove it from the array
        setSelectedCheckboxes((prevSelected) => prevSelected.filter((item) => item !== valueOne));
      } else {
        // If it's not checked, add it to the array
        setSelectedCheckboxes((prevSelected) => [...prevSelected, valueOne]);
      }
    updateState(selectedCheckboxes);
    handleClose(); // Close after save changes
  };

  const updateCheckBox = (value) => {
    // Check if the value is already in the selectedCheckboxes array
    const isChecked = selectedCheckboxes.includes(value);
  
    if (isChecked) {
      // If it's checked, remove it from the array
      setSelectedCheckboxes((prevSelected) => prevSelected.filter((item) => item !== value));
    } else {
      // If it's not checked, add it to the array
      setSelectedCheckboxes((prevSelected) => [...prevSelected, value]);
    }
  };

  const loadCheckBox = () => {
    const isCheckedOne = checkOneRef.current;
    if (isCheckedOne) {
        isCheckedOne.checked = true;
      } 
  };

  return (
    <>
      <Button variant="primary" className="btn btn-light" onClick={handleShow}>
        ADD
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose a process</Modal.Title>
        </Modal.Header>
        <Modal.Body>Select:
        {loadCheckBox()}
        <div class="form-check">
             <input
                ref={checkOneRef}
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                //{...selectedCheckboxes.includes('1') ? {checked: true} : updateCheckBox('1')}
                //checked={selectedCheckboxes.includes('1')}
                //onChange={updateCheckBox()}
            />
            <label class="form-check-label" for="flexCheckDefault">
            Test1
            </label>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProcess;