import Category from "../util/category"
import Item from "./item"

const FoodItemType = {}

FoodItemType.createVegetable = function (uuid, name, price, quantity, img) {
    return new Item(
        uuid,
        name,
        price,
        quantity,
        img,
        Category.V,
        "VegetableItemType"
    )
}

FoodItemType.createMeat = function (uuid, name, price, quantity, img) {
    return new Item(
        uuid,
        name,
        price,
        quantity,
        img,
        Category.M,
        "MeatItemType"
    )
}

FoodItemType.createDrink = function (uuid, name, price, quantity, img) {
    return new Item(
        uuid,
        name,
        price,
        quantity,
        img,
        Category.D,
        "DrinkItemType"
    )
}

FoodItemType.createNormal = function (uuid, name, price, quantity, img) {
    return new Item(
        uuid,
        name,
        price,
        quantity,
        img,
        Category.N,
        "NormalItemType"
    )
}

Object.freeze(FoodItemType)
export default FoodItemType
