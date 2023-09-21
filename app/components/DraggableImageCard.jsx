// DraggableImageCard.js
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes'; // Define your item types
import Image from 'next/image'

const DraggableImageCard = ({ image }) => {
  const [, drag] = useDrag({
    type: ItemTypes.IMAGE_CARD,
    item: { id: image.id },
  });

  return (
    <div
      ref={drag} // Make the component draggable
      style={{
        opacity: 0.7, // Adjust the opacity while dragging
        cursor: 'move', // Show a move cursor when dragging
      }}
    >
      {/* Render your image card content here */}
      <Image width={300} height={300}  src={image.url} alt={image.alt} />
    </div>
  );
};

export default DraggableImageCard;
