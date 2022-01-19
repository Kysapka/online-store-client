import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchOneDevice} from '../http/deviceAPI'

import star from '../assets/star.png'
import {Card, Col, Container, Image, Row} from "react-bootstrap";

const DevicePage = () => {

    const [device, setDevice] = useState({info: []})

    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    // const device = {
    //     id: 1,
    //     name: "IPhone 12 pro",
    //     price: 25000,
    //     rating: 5,
    //     img: 'https://cdnn21.img.ria.ru/images/07e5/0a/1e/1757022126_0:0:3072:2048_1440x900_80_1_1_9338b7928b524995666533c6f7a262c5.jpg.webp?source-sid=rian_photo'
    // }
    //
    // const description = [
    //     {id: 1, title: 'Оперативная память', description: '5 Гб'},
    //     {id: 1, title: 'Камера', description: '12 мп'},
    //     {id: 1, title: 'Процессор', description: 'Пентиум 3'},
    //     {id: 1, title: 'Кол-во ядер', description: '2'},
    //     {id: 1, title: 'Аккумулятор', description: '4000'},
    // ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    {device.img && <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>}
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column ">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <button className="btn btn-outline-dark">Добавить в корзину</button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index)=>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;