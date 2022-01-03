import React from 'react';
import {Form} from "react-bootstrap";

const CreateDevice = ({show, onHide}) => {

    const ModalWindow = () => {
        return (<div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Добавить устройство</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <Form>
                        <Form.Control
                            placeholder="Введите название устройства"
                        />
                    </Form>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-outline-danger" onClick={onHide}>Закрыть</button>
                    <button className="btn btn-outline-success" onClick={onHide}>Добавить</button>
                </div>
            </div>
        </div>)

    }

    return show && <ModalWindow/>
};

export default CreateDevice;