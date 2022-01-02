import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
            <ul className="list-group">
                {
                    device.types.map(type =>
                    <li key={type.id} className="list-group-item">{type.name}</li>
                )}
            </ul>
    );
});

export default TypeBar;