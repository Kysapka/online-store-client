import React from 'react';
import {Form} from "react-bootstrap";

const CreateType = ({show, onHide}) => {

    const ModalWindow = () => {
        return (<div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Добавить тип</h5>
                    <button type="button" className="btn-close" onClick={onHide}
                            aria-label="Close"/>
                </div>
                <div className="modal-body">
                    <Form>
                        <Form.Control
                            placeholder="Введите название типа"
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

export default CreateType;