import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {DEVICE_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const DeviceItem = ({device}) => {
    const history = useNavigate()
    return (
        <Col md={3} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer', border: 'light'}} className="mb-3">
                <Image width={150} height={150} src={device.img}/>
                <div className="text-black-50 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="mt-1 d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;