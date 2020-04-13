
import React from 'react';
import Details from './Details';
import Modal from 'react-bootstrap/Modal'


function DetailsModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <> 
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Venue Details</Modal.Title>
          </Modal.Header>
            <Modal.Body><Details /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  render(<DetailsModal />);