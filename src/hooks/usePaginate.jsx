import { useState, useCallback } from "react"

const usePaginate = (initialValue) => {
    const [pageValue, setPageValue] = useState(initialValue)

    const handlePageValueChange = useCallback((e) => {
        const { name, value } = e
        setPageValue((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }, [])

    return [pageValue, handlePageValueChange]
}

export default usePaginate
