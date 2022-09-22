import Data from "@/dev/data"

const CartService = {}

CartService.type = "CartServiceType"

CartService.firebaseCartInformationRequest = async function (userUuid) {
    return Data.cart[userUuid]
}

Object.freeze(CartService)
export default CartService
