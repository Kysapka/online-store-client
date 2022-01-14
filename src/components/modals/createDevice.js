import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {Col, Row} from "react-bootstrap";

const CreateDevice = ({show, onHide}) => {

    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const ModalWindow = () => {
        return (

            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Добавить устройство</h5>
                        <button type="button" className="btn-close" onClick={onHide} aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="dropdown mt-2 mb-2">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Выберите тип
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {device.types.map(type => <li key={type.id}><a className="dropdown-item" href="#">{type.name}</a></li>)}
                                </ul>
                            </div>
                            <div className="dropdown mt-2 mb-2">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Выберите брэнд
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {device.brands.map(brand => <li key={brand.id}><a className="dropdown-item" href="#">{brand.name}</a></li>)}
                                </ul>
                            </div>
                            <input className="form-control mt-3" placeholder="Введите название устройства"/>
                            <input type="number" className="form-control mt-3" placeholder="Введите стоимость устройства"/>
                            <input type="file" className="form-control mt-3"/>
                            <hr/>
                            <button className="btn btn-outline-dark" type="button"
                            onClick={addInfo}
                            >
                                Добавить новое свойство
                            </button>
                            { info.map(i =>
                            <Row  key={i.number} className="mt-4">
                                <Col md={4}>
                                    <input className="form-control" placeholder="Введите название свойства"/>
                                </Col>
                                <Col md={4}>
                                    <input className="form-control" placeholder="Введите описание свойства"/>
                                </Col>
                                <Col md={4}>
                                    <button onClick={() => removeInfo(i.number)} className="btn btn-outline-danger" type="button">Удалить</button>
                                </Col>
                            </Row>
                            ) }
                        </form>
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