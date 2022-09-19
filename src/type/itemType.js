import NameUtil from "../util/nameUtil"
import ErrorUtil from "../util/errorUtil"

class ItemType extends NameUtil {
    constructor(
        uuid,
        name,
        description,
        price,
        quantity,
        img,
        seller,
        origin,
        type
    ) {
        super(type)
        ErrorUtil.invalidParameter(
            [uuid, name, description, price, quantity, seller, origin].every(
                (v) => v
            )
        )
        this.uuid = uuid
        this.name = name
        ;(this.description = description), (this.price = price)
        this.quantity = quantity
        this.img = img
        this.seller = seller
        this.origin = origin

        NameUtil.freezeObject(this, ItemType)
    }
}

export default ItemType
