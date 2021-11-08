import React from 'react'
import Link from 'next/link'

export default function Categories({ tags }) {
  return (
    <div className="bg-white">
      <div className="mx-auto py-4 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-16 lg:pb-8">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Categories
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Front Matter includes contributions in these categories:
            </p>
          </div>
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {tags.map((tag) => (
              <li key={tag.id} className="list-none">
                <div className="space-y-4">
                  {tag && tag.feature_image && (
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="object-cover shadow-lg rounded-lg"
                        src={tag.feature_image}
                        alt=""
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <Link href={`/categories/${tag.slug}`}>
                        <a
                          href="dummy"
                          className="border-b-0 hover:border-b hover:border-green-600"
                        >
                          <h3>{tag.name}</h3>
                          <p className="font-light text-medium mt-1">
                            {tag.description}
                          </p>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
