import React from 'react';

import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {Col, Container, Row} from "react-bootstrap";

const Shop = () => {
    return (
        // <div class="container">
        //     <div className="row align-items-start mt-2">
        //         <Col md={3}>
        //             <TypeBar/>
        //         </Col>
        //         <Col md={9} >
        //             <BrandBar />
        //             <DeviceList />
        //         </Col>
        //     </div>
        // </div>
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9} >
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;