import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._categories = [
            {id:1, name_category: 'Конфеты', unit_product: 'упаковка'},
            {id:2, name_category: 'Шоколад', unit_product: 'упаковка'},
            {id:3, name_category: 'Вафли', unit_product: 'упаковка'}
        ]
        this._products = [
            {id: 1, name_product: 'конфеты', weight: '300 грамм', price: '15 BYN', img: `http://sarmat-product.ru/wp-content/uploads/2015/01/%D0%BD%D0%B0%D0%B1%D0%BE%D1%80-%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%82-%D0%A1%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BA-3751.jpg`},
            {id: 2, name_product: 'каприз', weight: '400 грамм', price: '21 BYN', img: `http://sarmat-product.ru/wp-content/uploads/2015/01/%D0%BD%D0%B0%D0%B1%D0%BE%D1%80-%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%82-%D0%A1%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BA-3751.jpg`},
            {id: 3, name_product: 'топ', weight: '213 грамм', price: '34 BYN', img: `http://sarmat-product.ru/wp-content/uploads/2015/01/%D0%BD%D0%B0%D0%B1%D0%BE%D1%80-%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%82-%D0%A1%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BA-3751.jpg`},
            {id: 4, name_product: 'топ', weight: '213 грамм', price: '34 BYN', img: `http://sarmat-product.ru/wp-content/uploads/2015/01/%D0%BD%D0%B0%D0%B1%D0%BE%D1%80-%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%82-%D0%A1%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BA-3751.jpg`},
            {id: 5, name_product: 'топ', weight: '213 грамм', price: '34 BYN', img: `http://sarmat-product.ru/wp-content/uploads/2015/01/%D0%BD%D0%B0%D0%B1%D0%BE%D1%80-%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%82-%D0%A1%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BA-3751.jpg`}
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