import Data from "@/dev/data"

const ProductService = {}

ProductService.type = "ProductServiceType"

ProductService.firebaseAddToCartRequeset = async function (item, userUuid) {
    if (Data?.cart[userUuid]?.includes(item)) return false
    Data.cart[userUuid]
        ? Data.cart[userUuid].push(item)
        : (Data.cart[userUuid] = [item])
    return true
}

Object.freeze(ProductService)
export default ProductService
