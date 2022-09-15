import { Droppable } from "react-beautiful-dnd"

const DroppableBox = ({ children }) => {
    return (
        <Droppable droppableId="draggable">
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                    {children}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default DroppableBox
