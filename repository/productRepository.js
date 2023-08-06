import {products} from "./products.js";
import {v4 as uuidv4} from 'uuid';

export const getAll = () => {
return (products)
}

export const create = (product) => {
    product.id = uuidv4()
    products.push(product);
    return product
}

export const update = (id, product) => {
    products.forEach((el, index) =>{
        if (el.id === id) {
            products[index] = product;
        }
    })
    return product
}

export const remove = (id) => {
    products.forEach((el, index) => {
        if (el.id === id) {
            products.splice(index,1)
        }
    })
    return (products)
}