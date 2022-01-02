import {makeAutoObservable} from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"},
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
        ]
        this._devices = [
            {
                id: 1,
                name: "IPhone 12 pro",
                price: 25000,
                rating: 5,
                img: 'https://cdnn21.img.ria.ru/images/07e5/0a/1e/1757022126_0:0:3072:2048_1440x900_80_1_1_9338b7928b524995666533c6f7a262c5.jpg.webp?source-sid=rian_photo'
            },
            {
                id: 1,
                name: "IPhone 12 pro",
                price: 25000,
                rating: 5,
                img: 'https://cdnn21.img.ria.ru/images/07e5/0a/1e/1757022126_0:0:3072:2048_1440x900_80_1_1_9338b7928b524995666533c6f7a262c5.jpg.webp?source-sid=rian_photo'
            },
            {
                id: 1,
                name: "IPhone 12 pro",
                price: 25000,
                rating: 5,
                img: 'https://cdnn21.img.ria.ru/images/07e5/0a/1e/1757022126_0:0:3072:2048_1440x900_80_1_1_9338b7928b524995666533c6f7a262c5.jpg.webp?source-sid=rian_photo'
            },
            {
                id: 1,
                name: "IPhone 12 pro",
                price: 25000,
                rating: 5,
                img: 'https://cdnn21.img.ria.ru/images/07e5/0a/1e/1757022126_0:0:3072:2048_1440x900_80_1_1_9338b7928b524995666533c6f7a262c5.jpg.webp?source-sid=rian_photo'
            },
        ]

        makeAutoObservable(this)
    }

    setTypes(types) {
        this.types = types
    }

    setBrands(brands) {
        this.brands = brands
    }

    setDevices(devices) {
        this.devices = devices
    }

    get Types() {
        return this.types
    }

    get Brands() {
        return this.brands
    }

    get Devices() {
        return this.devices
    }
}