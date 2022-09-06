import { useState } from "react"

const useModal = (initialValue) => {
    const [isOpen, setIsOpen] = useState(initialValue)

    const handleOpenButtonClick = () => {
        setIsOpen(true)
    }

    const handleCloseButtonClick = () => {
        setIsOpen(false)
    }

    return [isOpen, handleOpenButtonClick, handleCloseButtonClick]
}

export default useModal
