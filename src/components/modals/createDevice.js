import React, {useContext} from 'react';
import {Form} from "react-bootstrap";
import {Context} from "../../index";
import {Dropdown} from "bootstrap";

const CreateDevice = ({show, onHide}) => {

    const {device} = useContext(Context)

    const ModalWindow = () => {
        return (

            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Добавить устройство</h5>
                        <button type="button" className="btn-close" onClick={onHide}
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Form>
                            <Dropdown>
                                ccc
                            </Dropdown>
                                {/*<Form.Control*/}
                                {/*    placeholder="Введите название устройства"*/}
                                {/*/>*/}
                        </Form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-outline-danger" onClick={onHide}>Закрыть</button>
                        <button className="btn btn-outline-success" onClick={onHide}>Добавить</button>
                    </div>
                </div>
            </div>
    )

    }

    return show &&
        <ModalWindow/>
    };

    export default CreateDevice;