"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
// import awan from "/awan.png";

const data = [
  {
    id: 1,
    src: "/1.jpg",
    caption: "Image 1",
  },
  {
    id: 2,
    src: "/2.jpg",
    caption: "Image 2",
  },
  {
    id: 3,
    src: "/3.jpg",
    caption: "Image 3",
  },
  { id: 4, src: "/4.jpg", caption: "Image 4" },
  { id: 5, src: "/5.jpg", caption: "Image 5" },
];

export default function CarouselSlidingInterval() {
  return (
    <div className="relative w-full h-full">
      <Carousel slideInterval={5000}>
        {data.map((item) => (
          <img
            alt={item.caption}
            src={item.src}
            className="object-cover"
            key={item.id}
          />
        ))}
      </Carousel>
      <div className="w-full h-32 absolute -bottom-9">
        <Image src={"/awan.png"} alt="awan" fill />
      </div>
    </div>
  );
}
