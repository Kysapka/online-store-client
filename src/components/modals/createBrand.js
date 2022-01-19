import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import {createBrand, createType} from "../../http/deviceAPI";

const CreateBrand = ({show, onHide}) => {


    const [value, setValue] = useState('')

    const addBrand =() => {
        createBrand({name: value}).then(data => setValue(''))
        onHide()
    }

    const ModalWindow = () => {
        return (<div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Добавить бренд</h5>
                    <button type="button" className="btn-close" onClick={onHide}
                            aria-label="Close" />
                </div>
                <div className="modal-body">
                    <Form>
                        <Form.Control
                            autoFocus={true}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder="Введите название бренда"
                        />
                    </Form>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-outline-danger" onClick={onHide}>Закрыть</button>
                    <button className="btn btn-outline-success" onClick={addBrand}>Добавить</button>
                </div>
            </div>
        </div>)

    }

    return show && <ModalWindow/>
};

export default CreateBrand;