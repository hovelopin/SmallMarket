import ItemType from "./itemType"
import NameUtil from "../util/nameUtil"
import ErrorUtil from "../util/errorUtil"

const FoodItemListType = {}

class _FoodItemListType extends NameUtil {
    constructor(foodItemListType) {
        super("FoodItemListType")
        this.$_foodItemListType = foodItemListType
    }

    asObjectFoodItemListType() {
        const obj = {}
        this.$_foodItemListType.forEach((e) => {
            obj[e.uuid] = {
                name: e.name,
                price: e.price,
                quantity: e.quantity,
                img: e.img,
                type: e.type,
            }
        })
        return obj
    }
}

// input: array
FoodItemListType.createFoodItemListType = function (arr) {
    ErrorUtil.assert(arr.length > 1, "Array size > 1")
    arr.every((a) => ErrorUtil.instanceCheck(a, ItemType))
    return new _FoodItemListType(arr)
}

Object.freeze(FoodItemListType)
export default FoodItemListType
