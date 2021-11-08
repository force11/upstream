import React from 'react'

export default function Newsletter() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="container flex mx-auto py-4 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center font-sans">
          <div className="lg:w-0 lg:flex-1">
            <h2
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              id="newsletter-headline"
            >
              Sign up for our newsletter
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
              Get notified when Front Matter is launching.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="emailAddress" className="sr-only">
                Email address
              </label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                  Notify me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
