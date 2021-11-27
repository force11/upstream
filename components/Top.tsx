import React from "react";
import Image from "next/image";

export default function Top({ tag }) {
  return (
    <div className="relative h-full w-auto md:w-full bg-force-blue">
      <div className="absolute inset-0 overflow-auto">
        <Image
          className=""
          src={tag.feature_image}
          alt="teaser image"
          objectFit="cover"
          width={2042}
          height={560}
        />
        <div
          className="absolute inset-0 bg-force-blue mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-4 md:mx-auto pt-1 md:pt-8 lg:pt-12 pb-4 px-4 md:px-10 lg:px-12">
        <h1 className="text-3xl font-bold text-white">{tag.name}</h1>
        <p className="mt-6 text-xl font-sans flex-wrap text-white max-w-3xl">
          {tag.description}
        </p>
      </div>
    </div>
  );
}
