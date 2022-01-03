import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import CreateBrand from "../components/modals/createBrand";
import CreateDevice from "../components/modals/createDevice";
import CreateType from "../components/modals/createType";

const Admin = () => {

    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">

            <button onClick={() => setTypeVisible(true)} className="btn btn-outline-dark mt-4 p-2">Добавить тип</button>
            <button onClick={() => setBrandVisible(true)} className="btn btn-outline-dark mt-4 p-2">Добавить бренд</button>
            <button onClick={() => setDeviceVisible(true)} className="btn btn-outline-dark mt-4 p-2">Добавить устройство</button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>

        </Container>
    );
};

export default Admin;