import NameUtil from "../util/nameUtil"
import ErrorUtil from "../util/errorUtil"

class ItemType extends NameUtil {
    constructor(uuid, name, price, quantity, img, type) {
        super(type)
        ErrorUtil.invalidParameter(
            [uuid, name, price, quantity].every((v) => v)
        )
        this.uuid = uuid
        this.name = name
        this.price = price
        this.quantity = quantity
        this.img = img

        NameUtil.freezeObject(this, ItemType)
    }
}

export default ItemType
