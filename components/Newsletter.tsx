import React from "react";
import Link from "next/link";
import { useState } from "react";
import { addMember } from "../lib/posts";

export default function Newsletter() {
  let result = null;
  const [message, setMessage] = useState(null);

  const subscribeMember = async (event) => {
    event.preventDefault();
    const member = { email: event.target["email-address"].value };
    result = await addMember(member);

    // if there is an error
    if (result.context) {
      setMessage(result.context);
    } else {
      setMessage(
        "Please check your email inbox and confirm your Upstream subscription."
      );
    }
    event.target.reset();
  };

  let colorName = "red-300";
  if (message && message.startsWith("Please check your email")) {
    colorName = "force-blue";
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-12 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Subscribe to Upstream
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Subscribe to Upstream to receive all blog posts and occasional
            announcements from Team Upstream via email.
          </p>
          {message && (
            <div
              className={`bg-${colorName} border border-${colorName} text-white font-sans px-3 py-2 rounded-md relative`}
              role="alert"
            >
              <span className="block sm:inline">{message}</span>
            </div>
          )}
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form onSubmit={subscribeMember} className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border font-sans border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-force-blue focus:border-force-blue sm:max-w-xs rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center py-2 px-3 border border-transparent text-base font-medium font-sans rounded-md text-white bg-force-blue focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-force-blue"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-500">
            We care about the protection of your data. Read our{" "}
            <Link href="https://www.force11.org/privacy-statement" passHref>
              <a
                href="dummy"
                className="font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy.
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
