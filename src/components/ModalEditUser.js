import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { putUpdateUser } from "../services/UserService";
import { toast } from 'react-toastify';
import { useEffect } from "react";

const ModalEditUser = (props) => {
    const { show, handleClose, dataUserEdit, handleEditUserFromModal } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleEditUser = async () => {
        let res = await putUpdateUser(name, job);
        if (res && res.updatedAt) {
            //success
            handleEditUserFromModal({
                first_name: name,
                id: dataUserEdit.id
            })
            handleClose();
            toast.success("update user success");
        }
        else {
            //error
        }
        console.log(res);
    }

    useEffect(() => {
        if (show) {
            setName(dataUserEdit.first_name);
        }
    }, [dataUserEdit])

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">job</label>
                            <input
                                type="text"
                                className="form-control"
                                value={job}
                                onChange={(event) => setJob(event.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>Close</Button>
                    <Button variant="primary" onClick={() => handleEditUser()}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEditUser;

