import React from "react";
import Image from "next/image";

export default function Hero({ tag }) {
  return (
    <div className="relative">
      <div className="shadow-xl sm:rounded-2xl sm:overflow-hidden">
        {tag && tag.feature_image && (
          <Image
            className="absolute bg-cover inset-0"
            src={
              tag.feature_image
                ? tag.feature_image
                : `https://assets.front-matter.io/1/news${
                    Math.floor(Math.random() * 5) + 1
                  }.jpg`
            }
            alt=""
            layout="fill"
          />
          // <div
          //   className="absolute bg-cover inset-0"
          //   style={{
          //     backgroundImage: `url(${tag.feature_image})`
          //   }}
          // ></div>
        )}

        <div className="relative px-4 mt-48 pt-32 pb-8 sm:px-6 sm:py-24 lg:px-8 xl:pt-60 xl:pb-16 justify-center">
          <h1 className="text-center text-4xl font-extrabold tracking-tight">
            <span
              className={
                "block " +
                (tag && tag.accent_color ? "text-white" : "text-gray-900")
              }
            >
              {tag && tag.name}
            </span>
          </h1>
          {tag && tag.description && (
            <p className="mt-1 max-w-sm mx-auto text-center text-2xl font-sans sm:max-w-3xl">
              <span
                className={
                  tag && tag.accent_color ? "text-white" : "text-gray-900"
                }
              >
                {tag && tag.description}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
