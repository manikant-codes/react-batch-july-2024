import React, { useState } from "react";
import { images } from "../../data/gallery";
import Image from "./Image";
import GalleryModal from "./GalleryModal";

function Gallery(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function handleImageClick(index) {
    setActiveIndex(index);
    toggleModal();
  }

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images[props.activeTab].map((image, index) => {
        return (
          <div
            onClick={() => {
              handleImageClick(index);
            }}
            className="animate-[myscale_1s_ease] rounded-lg overflow-hidden shadow-sm h-[300px]"
          >
            <Image key={image.id} image={image} />
          </div>
        );
      })}

      {isOpen && (
        <GalleryModal
          toggleModal={toggleModal}
          images={images[props.activeTab]}
          activeIndex={activeIndex}
        />
      )}
    </div>
  );
}

export default Gallery;
