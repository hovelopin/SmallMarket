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
        "VegetableType"
    )
}

FoodItemType.createMeat = function (uuid, name, price, quantity, img) {
    return new Item(uuid, name, price, quantity, img, Category.M, "MeatType")
}

FoodItemType.createDrink = function (uuid, name, price, quantity, img) {
    return new Item(uuid, name, price, quantity, img, Category.D, "DrinkType")
}

FoodItemType.createNormal = function (uuid, name, price, quantity, img) {
    return new Item(uuid, name, price, quantity, img, Category.N, "NormalType")
}

Object.freeze(FoodItemType)
export default FoodItemType
