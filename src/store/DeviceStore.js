import {makeAutoObservable} from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            // {id: 1, name: "Холодильники"},
            // {id: 2, name: "Смартфоны"},
            // {id: 3, name: "Ноутбуки"},
            // {id: 4, name: "Телевизоры"},
        ]
        this._brands = [
            // {id: 1, name: "Samsung"},
            // {id: 2, name: "Apple"},
            // {id: 3, name: "Lenovo"},
            // {id: 4, name: "Asus"},
        ]
        this._devices = [
            // {
            //     id: 1,
            //     name: "IPhone 12 pro",
            //     price: 25000,
            //     rating: 5,
            //     img: 'https://cdnn21.img.ria.ru/images/07e5/0a/1e/1757022126_0:0:3072:2048_1440x900_80_1_1_9338b7928b524995666533c6f7a262c5.jpg.webp?source-sid=rian_photo'
            // },
            // {
            //     id: 2,
            //     name: "IPhone 12 pro",
            //     price: 25000,
            //     rating: 5,
            //     img: 'https://cdnn21.img.ria.ru/images/07e5/0a/1e/1757022126_0:0:3072:2048_1440x900_80_1_1_9338b7928b524995666533c6f7a262c5.jpg.webp?source-sid=rian_photo'
            // },
            // {
            //     id: 3,
            //     name: "IPhone 12 pro",
            //     price: 25000,
            //     rating: 5,
            //     img: 'https://cdnn21.img.ria.ru/images/07e5/0a/1e/1757022126_0:0:3072:2048_1440x900_80_1_1_9338b7928b524995666533c6f7a262c5.jpg.webp?source-sid=rian_photo'
            // },
            // {
            //     id: 4,
            //     name: "IPhone 12 pro",
            //     price: 25000,
            //     rating: 5,
            //     img: 'https://cdnn21.img.ria.ru/images/07e5/0a/1e/1757022126_0:0:3072:2048_1440x900_80_1_1_9338b7928b524995666533c6f7a262c5.jpg.webp?source-sid=rian_photo'
            // },
            // {
            //     id: 5,
            //     name: "IPhone 12 pro",
            //     price: 25000,
            //     rating: 5,
            //     img: 'https://cdnn21.img.ria.ru/images/07e5/0a/1e/1757022126_0:0:3072:2048_1440x900_80_1_1_9338b7928b524995666533c6f7a262c5.jpg.webp?source-sid=rian_photo'
            // },
            // {
            //     id: 6,
            //     name: "IPhone 12 pro",
            //     price: 25000,
            //     rating: 5,
            //     img: 'https://cdnn21.img.ria.ru/images/07e5/0a/1e/1757022126_0:0:3072:2048_1440x900_80_1_1_9338b7928b524995666533c6f7a262c5.jpg.webp?source-sid=rian_photo'
            // },
            // {
            //     id: 7,
            //     name: "IPhone 12 pro",
            //     price: 25000,
            //     rating: 5,
            //     img: 'https://cdnn21.img.ria.ru/images/07e5/0a/1e/1757022126_0:0:3072:2048_1440x900_80_1_1_9338b7928b524995666533c6f7a262c5.jpg.webp?source-sid=rian_photo'
            // },
        ]
        this._selectedType ={}
        this._selectedBrand ={}
        this._page = 1
        this._totalCount = 0
        this._limit = 3

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setLimit(limit) {
        this._limit = limit
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        this.setPage(1)
        return this._selectedType
    }

    get selectedBrand() {
        this.setPage(1)
        return this._selectedBrand
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}