import React from 'react';
import Image from 'next/image'
import { useDrag } from 'react-dnd';


const ImageCard = ({ image }) => {
  const [{ isDragging }, ref] = useDrag({
    type: 'IMAGE',
    item: { id: image.id }, // Data to be passed when an item is dragged
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"  style={{
      opacity: isDragging ? 0.5 : 1,
      cursor: 'move', // Add a cursor style to indicate draggability
    }}>
      <Image src={image.webformatURL} alt="" width={300} height={300} className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
       
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard;