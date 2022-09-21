import ItemType from "./itemType"
import ErrorUtil from "../util/errorUtil"
import Category from "../util/category"

class Item extends ItemType {
    constructor(
        uuid,
        name,
        description,
        price,
        quantity,
        img,
        seller,
        origin,
        category,
        type
    ) {
        // image 경로가 없는 경우 defaultImg를 불러오도록 한다.
        const imgUrl = img ? img : "defaultImg.png"
        super(
            uuid,
            name,
            description,
            price,
            quantity,
            imgUrl,
            seller,
            origin,
            type
        )
        ErrorUtil.invalidParameter(category)
        // category는 Category type과 동일해야 한다.
        ErrorUtil.instanceCheck(category, Category)
        this.category = category
    }
}

// input: price(number), discount(string)
Item.discountPrice = function (price, discount) {
    ErrorUtil.typeCheck(discount, "string")
    const dis = discount.replace("%", "")
    const p = Math.ceil(price * (parseInt(dis) / 100))
    return p
}

Item.stockCheck = function (quantity) {
    return quantity === 0 ? false : true
}

export default Item
