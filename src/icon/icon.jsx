import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCartArrowDown,
    faShoppingBag,
    faSignIn,
    faSignOut,
    faRegistered,
    faUser,
    faAddressBook,
    faClipboard,
    faAddressCard,
    faTrash,
} from "@fortawesome/free-solid-svg-icons"
import ErrorUtil from "../util/errorUtil"

function Icon({ name }) {
    return <FontAwesomeIcon icon={doFetchFontAwesomeIcon.call(this, name)} />
}

function doFetchFontAwesomeIcon(name) {
    switch (name) {
        case "cart":
            return faCartArrowDown
        case "bag":
            return faShoppingBag
        case "signin":
            return faSignIn
        case "signup":
            return faRegistered
        case "signout":
            return faSignOut
        case "user":
            return faUser
        case "contact":
            return faAddressBook
        case "qna":
            return faClipboard
        case "about":
            return faAddressCard
        case "trash":
            return faTrash
        default:
            ErrorUtil.notImplemented()
    }
}

export default Icon
