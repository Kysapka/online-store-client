import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import CreateBrand from "../components/modals/createBrand";
import CreateDevice from "../components/modals/createDevice";
import CreateType from "../components/modals/createType";

const Admin = () => {

    const [brandVisible, setBrandVisible] = useState(true)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <button className="btn btn-outline-dark mt-4 p-2">Добавить тип</button>
            <button className="btn btn-outline-dark mt-4 p-2">Добавить бренд</button>
            <button className="btn btn-outline-dark mt-4 p-2">Добавить устройство</button>
            <CreateBrand show={brandVisible}/>
            <CreateType show={typeVisible}/>
            <CreateDevice show={deviceVisible}/>
        </Container>
    );
};

export default Admin;