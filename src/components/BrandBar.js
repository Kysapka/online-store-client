import React, {useContext} from 'react';
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex ">
            {device.brands.map(brand =>
                <Card
                    style={{cursor: "pointer"}}
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                    className="p-3 w-auto"
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;