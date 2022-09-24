import Category from "../util/category"
import Item from "./item"

const FoodItemType = {}

FoodItemType.createVegetable = function (
    uuid,
    name,
    description,
    price,
    quantity,
    img,
    seller,
    origin
) {
    return new Item(
        uuid,
        name,
        description,
        price,
        quantity,
        img,
        seller,
        origin,
        Category.V,
        "VegetableItemType"
    )
}

FoodItemType.createMeat = function (
    uuid,
    name,
    description,
    price,
    quantity,
    img,
    seller,
    origin
) {
    return new Item(
        uuid,
        name,
        description,
        price,
        quantity,
        img,
        seller,
        origin,
        Category.M,
        "MeatItemType"
    )
}

FoodItemType.createDrink = function (
    uuid,
    name,
    description,
    price,
    quantity,
    img,
    seller,
    origin
) {
    return new Item(
        uuid,
        name,
        description,
        price,
        quantity,
        img,
        seller,
        origin,
        Category.D,
        "DrinkItemType"
    )
}

FoodItemType.createNormal = function (
    uuid,
    name,
    description,
    price,
    quantity,
    img,
    seller,
    origin
) {
    return new Item(
        uuid,
        name,
        description,
        price,
        quantity,
        img,
        seller,
        origin,
        Category.N,
        "NormalItemType"
    )
}

Object.freeze(FoodItemType)
export default FoodItemType
