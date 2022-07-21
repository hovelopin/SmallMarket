import NameUtil from "../util/nameUtil"
import ErrorUtil from "../util/errorUtil"

class ItemType extends NameUtil {
    constructor(uuid, name, price, quantity, img, type) {
        super(type)
        ErrorUtil.invalidParameter(uuid)
        this.uuid = uuid
        ErrorUtil.invalidParameter(name)
        this.name = name
        ErrorUtil.invalidParameter(price)
        this.price = price
        ErrorUtil.invalidParameter(quantity)
        this.quantity = quantity
        ErrorUtil.invalidParameter(img)
        this.img = img

        NameUtil.freezeObject(this, ItemType)
    }
}

export default ItemType
