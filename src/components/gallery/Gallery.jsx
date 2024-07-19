import React, { useState } from "react";

const app = [
  {
    id: 1,
    img: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
  },
  {
    id: 2,
    img: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
  },
  {
    id: 3,
    img: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
  },
];

const cards = [
  {
    id: 4,
    img: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
  },
  {
    id: 5,
    img: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
  },
  {
    id: 6,
    img: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
  },
];

const web = [
  {
    id: 7,
    img: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
  },
  {
    id: 8,
    img: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
  },
  {
    id: 9,
    img: "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
  },
];

const all = app.concat(cards, web);

const images = {
  1: all,
  2: app,
  3: cards,
  4: web,
};

function Gallery(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {images[props.activeTab].map((value) => {
        return (
          <div
            key={value.id}
            className="h-[300px] w-auto overflow-hidden rounded-lg"
          >
            <img
              src={value.img}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
