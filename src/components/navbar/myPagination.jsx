import { Link } from "react-router-dom"
import { Stack, Pagination, PaginationItem } from "@mui/material"

const MyPagination = ({ totalCount }) => {
    return (
        <Stack spacing={2}>
            <Pagination
                count={totalCount}
                renderItem={(item) => (
                    <PaginationItem
                        component={Link}
                        to={`/items${
                            item.page === 1
                                ? `?page=${item.page}`
                                : `?page=${item.page}`
                        }`}
                        {...item}
                    />
                )}
            />
        </Stack>
    )
}

export default MyPagination
