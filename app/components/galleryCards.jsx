'use client'

import React, { useState, useEffect } from 'react';
import ImageCard from './imageCard';
import ImageSearch from './imageSearch';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const GalleryCards = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=39569650-5cd0198dcddefdb4872e20206&q=${term}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [term]);

    return (
        <div className="container mx-auto">
            <ImageSearch searchText={(text) => setTerm(text)} />

            {isLoading ? (
                <div className="text-center mt-32">
                  
                    <div className="spinner"></div> 
                </div>
            ) : (
              <DndProvider backend={HTML5Backend}>
                   <div>
                    {images.length === 0 ? (
                        <h1 className="text-5xl text-center mx-auto mt-32">Sorry No Images Found</h1>
                    ) : (
                        <div className="grid grid-cols-3 gap-4">
                            {images.map(image => (
                                <ImageCard key={image.id} image={image} />
                            ))}
                        </div>
                    )}
                </div>
              </DndProvider>
              
            )}
        </div>
    );
}

export default GalleryCards;
