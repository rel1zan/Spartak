import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._categories = [
            {id:1, name_category: 'Конфеты', unit_product: 'упаковка'},
            {id:2, name_category: 'Шоколад', unit_product: 'упаковка'},
            {id:3, name_category: 'Вафли', unit_product: 'упаковка'}
        ]
        this._products = [
            {id: 1, name_product: 'конфеты', weight: 300, price: 15, img: ``},
            {id: 2, name_product: 'каприз', weight: 400, price: 21, img: ``},
            {id: 3, name_product: 'топ', weight: 213, price: 21, img: ``}
        ]
        this._selectedCategory = {}
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories  = categories
    }

    setProducts(products) {
        this._products = products
    }

    setSelectedCategory(category) {
        this._selectedCategory = category
    }

    get categories() {
        return this._categories
    }

    get products() {
        return this._products
    }

    get selectedCategory() {
        return this._selectedCategory
    }
}