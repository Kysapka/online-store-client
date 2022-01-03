import React from 'react';
import {Container} from "react-bootstrap";

const Admin = () => {
    return (
        <Container className="d-flex flex-column">
            <button className="btn btn-outline-dark mt-4 p-2">Добавить тип</button>
            <button className="btn btn-outline-dark mt-4 p-2">Добавить бренд</button>
            <button className="btn btn-outline-dark mt-4 p-2">Добавить устройство</button>
        </Container>
    );
};

export default Admin;