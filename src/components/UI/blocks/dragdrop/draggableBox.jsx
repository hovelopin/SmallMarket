import React from "react"
import { Draggable } from "react-beautiful-dnd"

const DraggableBox = ({ item, index, children }) => {
    return (
        <Draggable draggableId={item.uuid} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {children}
                </div>
            )}
        </Draggable>
    )
}

export default DraggableBox
