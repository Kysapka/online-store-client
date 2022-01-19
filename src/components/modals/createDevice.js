import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../../index";
import {Col, Row} from "react-bootstrap";
import {fetchBrands, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {

    // const [name, setName] = useState('')
    // const [price, setPrice] = useState(0)

    const name = useRef(null)
    const price = useRef(null)

    const [file, setFile] = useState(null)

    // const [brand, setBrand] = useState(null)
    // const [type, setType] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const [info, setInfo] = useState([])

    const {device} = useContext(Context)

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        console.log(name.current.value, price.current.value)
    }

    const selectedType = device.selectedType.name
    const selectedBrand = device.selectedBrand.name

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
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedType || "Выберите тип" }
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {device.types.map(type => <li key={type.id} onClick={() => device.setSelectedType(type)}><a className="dropdown-item" href="#">{type.name}</a></li>)}
                                </ul>
                            </div>
                            <div className="dropdown mt-2 mb-2">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedBrand || "Выберите брэнд" }
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                    {device.brands.map(brand => <li key={brand.id} onClick={() => device.setSelectedBrand(brand)}><a className="dropdown-item" href="#">{brand.name}</a></li>)}
                                </ul>
                            </div>
                            <input  ref={name} className="form-control mt-3" placeholder="Введите название устройства"/>
                            <input  ref={price} type="number" className="form-control mt-3" placeholder="Введите стоимость устройства"/>
                            <input type="file" onChange={selectFile} className="form-control mt-3"/>
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
                        <button className="btn btn-outline-success" onClick={addDevice}>Добавить</button>
                    </div>
                </div>
            </div>
    )

    }

    return show &&
        <ModalWindow/>
    });

    export default CreateDevice;