import { useState, useCallback } from "react"

const useForm = (initialValue) => {
    const [formValue, setFormValue] = useState(initialValue)

    const handleFormValueChange = useCallback((e) => {
        const { name, value } = e.target
        setFormValue((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }, [])

    return [formValue, handleFormValueChange]
}

export default useForm
