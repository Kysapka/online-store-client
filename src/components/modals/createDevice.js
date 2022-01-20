import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../../index";
import {Button, Col, Modal, Row} from "react-bootstrap";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    const [file, setFile] = useState(null)

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

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    const selectedType = device.selectedType.name
    const selectedBrand = device.selectedBrand.name

        return (

            <Modal show={show} onHide={onHide}>

                <Modal.Header closeButton>
                    <Modal.Title>
                        Добавить устройство
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {selectedType || "Выберите тип"}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {device.types.map(type => <li key={type.id}
                                                              onClick={() => device.setSelectedType(type)}><a
                                    className="dropdown-item" href="#">{type.name}</a></li>)}
                            </ul>
                        </div>
                        <div className="dropdown mt-2 mb-2">
                            <button className="btn btn-secondary dropdown-toggle" type="button"
                                    id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                {selectedBrand || "Выберите брэнд"}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                {device.brands.map(brand => <li key={brand.id}
                                                                onClick={() => device.setSelectedBrand(brand)}><a
                                    className="dropdown-item" href="#">{brand.name}</a></li>)}
                            </ul>
                        </div>
                        <input value={name} onChange={e => setName(e.target.value)} className="form-control mt-3" placeholder="Введите название устройства"/>
                        <input value={price} onChange={e => setPrice(+e.target.value)} type="number" className="form-control mt-3"
                               placeholder="Введите стоимость устройства"/>
                        <input type="file" onChange={selectFile} className="form-control mt-3"/>
                        <hr/>
                        <button className="btn btn-outline-dark" type="button"
                                onClick={addInfo}
                        >
                            Добавить новое свойство
                        </button>
                        {info.map(i =>
                            <Row key={i.number} className="mt-4">
                                <Col md={4}>
                                    <input
                                        value={i.title}
                                        onChange={e => changeInfo('title', e.target.value, i.number)}
                                        className="form-control" placeholder="Введите название свойства"/>
                                </Col>
                                <Col md={4}>
                                    <input
                                        autoFocus
                                        value={i.description}
                                        onChange={e => changeInfo('description', e.target.value, i.number)}
                                        className="form-control" placeholder="Введите описание свойства"/>
                                </Col>
                                <Col md={4}>
                                    <button onClick={() => removeInfo(i.number)} className="btn btn-outline-danger"
                                            type="button">Удалить
                                    </button>
                                </Col>
                            </Row>
                        )}
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={addDevice}>
                        Добавить
                    </Button>
                </Modal.Footer>

            </Modal>
)
});

export default CreateDevice;