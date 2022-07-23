import FoodItemType from "../type/foodItemType"
import FoodItemListType from "../type/foodItemListType"

const Data = {}

// 같은 Type의 Item이 여러개 들어있는 Type이라면 FoodItemListType이라고 정의
// 한 개의 Item이라면 VegetableItemType, MeatItemType etc... 이렇게 정의
Data.createVegetableItemData = function () {
    const vArr = Array.from({ length: 20 }, (_, i) => {
        const name = `Vegetable ${i + 1}`
        const price = Math.floor(Math.random() * 10000 + 1)
        const quantity = Math.floor(Math.random() * 100 + 1)
        const vObj = FoodItemType.createVegetable(
            i + 1,
            name,
            price,
            quantity,
            null
        )
        return vObj
    })
    return FoodItemListType.createFoodItemListType(vArr)
}

Data.createMeatItemData = function () {
    const mArr = Array.from({ length: 40 }, (_, i) => {
        const name = `Meat ${i + 1}`
        const price = Math.floor(Math.random() * 20000 + 1)
        const quantity = Math.floor(Math.random() * 20 + 1)
        const mObj = FoodItemType.createMeat(i + 1, name, price, quantity, null)
        return mObj
    })
    return FoodItemListType.createFoodItemListType(mArr)
}

Data.createDrinkItemType = function () {
    const dArr = Array.from({ length: 25 }, (_, i) => {
        const name = `Drink ${i + 1}`
        const price = Math.floor(Math.random() * 5000 + 1)
        const quantity = Math.floor(Math.random() * 200 + 1)
        const mObj = FoodItemType.createDrink(
            i + 1,
            name,
            price,
            quantity,
            null
        )
        return mObj
    })
    return FoodItemListType.createFoodItemListType(dArr)
}

Data.createNormalItemType = function () {
    const nArr = Array.from({ length: 47 }, (_, i) => {
        const name = `Normal ${i + 1}`
        const price = Math.floor(Math.random() * 9000 + 1)
        const quantity = Math.floor(Math.random() * 63 + 1)
        const nObj = FoodItemType.createNormal(
            i + 1,
            name,
            price,
            quantity,
            null
        )
        return nObj
    })
    return FoodItemListType.createFoodItemListType(nArr)
}

export default Data
