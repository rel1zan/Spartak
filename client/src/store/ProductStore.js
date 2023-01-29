import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._categories = [
            {id:1, name_category: 'конфеты', unit_product: 'упаковка'}
        ]
        this._products = [
            {id: 1, name_product: 'конфеты', weight: 300, price: 15, img: ``},
            {id: 2, name_product: 'каприз', weight: 400, price: 21, img: ``},
            {id: 3, name_product: 'топ', weight: 213, price: 21, img: ``}
        ]
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories  = categories
    }

    setProducts(products) {
        this._products = products
    }

    get Categories() {
        return this._categories
    }

    get Products() {
        return this._products
    }
}