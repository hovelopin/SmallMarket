import { firestorage } from "@/service/firebaseService"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

const ImageService = {}

ImageService.type = "ImageServiceType"

ImageService.firesotrageImageUploadRequest = async function (userUuid, img) {
    const productImgRef = ref(firestorage, `products/${userUuid}/${img.name}`)
    await uploadBytes(productImgRef, img)
    return await getDownloadURL(productImgRef)
}

Object.freeze(ImageService)
export default ImageService
