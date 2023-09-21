"use client"

import React, { useState, useEffect } from 'react';
//import ImageCard from './imageCard';
import ImageSearch from './imageSearch';
import Image from "next/image"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const GalleryCards = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=39569650-5cd0198dcddefdb4872e20206&q=${term}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  const handleImageReorder = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedImages = [...images];
    const [reorderedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, reorderedImage);

    setImages(reorderedImages);
  };

  return (
    <div className="container mx-auto mb-20">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {isLoading ? (
        <div className="text-center mt-32">
          <div className="spinner"></div>
        </div>
      ) : (
        <DragDropContext onDragEnd={handleImageReorder}>
          <Droppable droppableId="image-gallery" >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6"
              >
                {images.map((image, index) => (
                  <Draggable
                    key={image.id}
                    draggableId={image.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Image
                          src={image.webformatURL}
                          alt=""
                          className='w-full h-[300px]'
                          width={300}
                          height={300}
                        />
                        <div>Photo by {image.user}</div>
                        <ul></ul>
                        <div className="px-6 py-4">
                          {/* Split the tags here */}
                          {image.tags.split(',').map((tag, index) => (
                            <span
                              key={index}
                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                            >
                              #{tag.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

export default GalleryCards;
