import Item from "@/type/item"
import Category from "@util/category"
import ErrorUtil from "@util/errorUtil"

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

FoodItemType.craeteType = function (productItemData) {
    const {
        uuid,
        name,
        description,
        price,
        quantity,
        img,
        seller,
        sellerUuid,
        origin,
    } = productItemData
    switch (productItemData.category) {
        case "Drink":
            return FoodItemType.createDrink(
                uuid,
                name,
                description,
                price,
                quantity,
                img,
                sellerUuid || seller,
                origin
            )

        case "Meat":
            return FoodItemType.createMeat(
                uuid,
                name,
                description,
                price,
                quantity,
                img,
                sellerUuid || seller,
                origin
            )

        case "Vegetable":
            return FoodItemType.createVegetable(
                uuid,
                name,
                description,
                price,
                quantity,
                img,
                sellerUuid || seller,
                origin
            )

        case "Normal":
            return FoodItemType.createNormal(
                uuid,
                name,
                description,
                price,
                quantity,
                img,
                sellerUuid || seller,
                origin
            )

        default:
            ErrorUtil.notImplemented()
    }
}

Object.freeze(FoodItemType)
export default FoodItemType
